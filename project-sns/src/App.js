import React, { Component } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import Youtube from "./components/youtube";
import Lnb from "./components/lnb";
import "./App.css";

class App extends Component {

	state = {
		channelId: "",
		userList: [
			{
				id: 1,
				username: "user1111",
				passowrd: "1111",
				channels: ["OLAK5uy_lAWlPRIDBvK8hLsDB3FM_SGGl4bTaw0Jc", "PLawdY97HdndQ8gtbO-zJIZjBkyHsmtsQu"],
				channelName: ["엣헴엣헴 신이나 핑크퐁 아기상어 가족동요", "뽀로로 상어 동요"],
			},
			{
				id: 2,
				username: "user2222",
				passowrd: "2222",
				channels: ["OLAK5uy_lAWlPRIDBvK8hLsDB3FM_SGGl4bTaw0Jc"],
				channelName: ["엣헴엣헴 신이나 핑크퐁 아기상어 가족동요"],
			},
		],
		isShow: false,
	};

	handleLnb = (e) => {
		e.preventDefault();
		const { isShow } = this.state;

		if(!isShow) {
			this.setState({
				isShow: true,
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

		const { userList, channelId } = this.state;
		this.setState({
			channelId: "",
			userList: userList.concat({
				id: this.id,
				channelId,
				isActive: false,
			}),
			temp: {},
		});

		this.id++;
	};

	handleDelete = (id) => {
		this.setState({
			userList: this.state.userList.filter((user) => user.id !== id),
		});
	};
	render() {
		const { isShow, channelId, userList } = this.state;
		return (
			<div className='projectMain'>
				<div className="projcetLogo">
					<h1>Pick Channel<span>.</span></h1>
				</div>
				<ul className='projcetNav'>
					<li>
						<NavLink to='/04.project-pick-channel/youtube1' activeClassName="active">
							<span>#</span> 뽀로로 상어 동요
						</NavLink>
					</li>
				</ul>
				<Lnb channelId={channelId} data={userList.user} isShow={isShow} onActiveLnb={this.handleLnb} onInsert={this.handleInsert} onChange={this.handleChange} onDelete={this.handleDelete} />
				<Switch>
					<Route path='/04.project-pick-channel' render={() => <Youtube channelId='PLawdY97HdndQ8gtbO-zJIZjBkyHsmtsQu'/> }/>
					<Route render={() => <div className="projectError">404 NOT FOUND :(</div>} />
				</Switch>
			</div>
		);
	}
}
export default App;
