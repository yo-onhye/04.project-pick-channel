import React, { Component } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";
import Login from "./components/login";
import Signup from "./components/signup";
import Lnb from "./components";
import Youtube from "./components/youtube";
import "./App.css"

class App extends Component {
	id = 2;
	dataId = 2;
	state = {
		userId: "",
		userPw: "",
		signupId: '',
		signupPw: '',
		signupRepw: "",
		signupName: "",
		channelId: "",
		channelName: "",
		userLists: [
			{
				dataId: 0,
				userDataId: "user111",
				userDataPw: "user111!",
				channelDatas: [
					{
						id: 0,
						channelId: "PLr0T5CaHaPwVVVUeriESL3fyfF3eRUuHr",
						channelName: "[🧑‍⚕️슬기로운 의사생활] 미도와 파라솔",
					},
					{
						id: 1,
						channelId: "PLdyB3s37qpTPuJSn-LjZqBFuf7u-XmA1z",
						channelName: "사이코지만 괜찮아",
					},
				],
			},
			{
				dataId: 1,
				userDataId: "user222",
				userDataPw: "user222!",
				channelDatas: [
					{
						id: 0,
						channelId: "PLr0T5CaHaPwVVVUeriESL3fyfF3eRUuHr",
						channelName: "[🧑‍⚕️슬기로운 의사생활] 미도와 파라솔",
					},
				],
			},
		],
		userDatas: null,
		channelDatas: null,
		vaildAccount: true,
		vaildInfo: true,
		validText: '',
		isShow: false,
	};

	checkUserAccount = (e) => {
		e.preventDefault();

		const { userLists, userId, userPw } = this.state;
		if (userId !== "" && userPw !== "") {
			const userData = userLists.find((userData) => userData.userDataId === userId && userData.userDataPw === userPw);

			if (userData === undefined) {
				this.setState({
					vaildAccount: false,
				});
			} else {
				this.setState({
					vaildAccount: true,
					userDatas: userLists.filter((userData) => userData.userDataId === userId),
				});
			}
			return userData;
		} else {
			this.setState({
				vaildAccount: false,
			});
		}
	};

	checkUserJoinInfo = (e) => {
		e.preventDefault();

		const { signupId, signupPw, signupRepw, signupName } = this.state;
		if (signupId === "" || signupPw === "" || signupRepw === "" || signupName === "") {
			this.setState({
				vaildInfo: false,
				validText: '입력되지 않은 값이 있습니다. 확인해주세요.'
			});
		} else if (signupId.length < 5) {
			this.setState({
				vaildInfo: false,
				validText: '아이디는 6자 이상이어야 합니다.'
			});
		} else if (signupPw.length < 7) {
			this.setState({
				vaildInfo: false,
				validText: '비밀번호는 8자 이상이어야 합니다.'
			});
		} else if (signupPw !== signupRepw) {
			this.setState({
				vaildInfo: false,
				validText: '비밀번호가 일치하지 않습니다.'
			});
		} else {
			this.setState({
				vaildInfo: false,
			});
		}
	};

	handleOutsideClick = (e) => {
		e.preventDefault();
		const { isShow } = this.state;

		if (isShow) {
			this.setState({
				isShow: false,
			});
		}
	};

	handleLnb = (e) => {
		e.preventDefault();
		const { isShow } = this.state;

		if (!isShow) {
			this.setState({
				isShow: true,
			});
		} else {
			this.setState({
				isShow: false,
			});
		}
	};

	handleChange = (e) => {
		const { value, name } = e.target;
		this.setState({
			[name]: value,
		});
	};

	handleInsert = (e) => {
		e.preventDefault();

		const { channelDatas, channelId, channelName } = this.state;
		this.setState({
			channelDatas: channelDatas.concat({
				id: this.id,
				channelId,
				channelName,
			}),
			channelId: "",
			channelName: "",
			temp: {},
		});

		this.id++;
	};

	handleDelete = (id) => {
		this.setState({
			channelDatas: this.state.channelDatas.filter((user) => user.id !== id),
		});
	};

	componentDidUpdate(prevProps, prevState) {
		if (this.state.userDatas !== prevProps.userDatas) {
			if (this.state.userDatas !== null) {
				this.setState({
					channelDatas: this.state.userDatas[0].channelDatas,
				});
			}
		}
	}

	render() {
		const { isShow, signupId, signupPw, signupRepw, signupName, vaildInfo, validText, checkUserJoinInfo, userId, userPw, vaildAccount, channelId, channelName, userLists, userDatas, channelDatas } = this.state;

		return (
			<div className='projectMain'>
				<div className='projcetLogo'>
					<h1>
						Pick Channel<span>.</span>
					</h1>
				</div>
				<nav className='projcetNav'>
					{userDatas !== null && (
						<ul className='projcetNavList'>
							{channelDatas.map((d) => {
								return (
									<li key={d.id}>
										<NavLink to={`/04.project-pick-channel/${d.id}`} activeClassName='active'>
											<span>#</span> {d.channelName}
										</NavLink>
									</li>
								);
							})}
						</ul>
					)}
				</nav>
				<OutsideClickHandler onOutsideClick={this.handleOutsideClick}>
					<Lnb channelId={channelId} channelName={channelName} data={channelDatas} isShow={isShow} onActiveLnb={this.handleLnb} onInsert={this.handleInsert} onChange={this.handleChange} onDelete={this.handleDelete} />
				</OutsideClickHandler>
				<Switch>
					<Route exact path='/04.project-pick-channel' render={() => <Signup data={userLists} signupId={signupId} signupPw={signupPw} signupRepw={signupRepw} signupName={signupName} validText={validText} vaildInfo={vaildInfo} checkJoinInfo={checkUserJoinInfo} onChange={this.handleChange} onCheckVaild={this.checkUserAccount} />} />
					<Route path='/04.project-pick-channel/login' render={() => <Login data={userLists} userId={userId} userPw={userPw} vaildAccount={vaildAccount} onChange={this.handleChange} onCheckVaild={this.checkUserAccount} />} /> 
					{/* 
						<Route exact path='/04.project-pick-channel' render={() => <Login data={userLists} userId={userId} userPw={userPw} vaildAccount={vaildAccount} onChange={this.handleChange} onCheckVaild={this.checkUserAccount} />} /> 
						{userDatas !== null &&
							channelDatas.map((d) => {
								return <Route path={`/04.project-pick-channel/${d.id}`} render={() => <Youtube channelName={d.channelName} channelId={d.channelId} />} />;
						})}
					*/}
					<Route render={() => <div className='projectError'>404 NOT FOUND :(</div>} />
				</Switch>
			</div>
		);
	}
}
export default App;
