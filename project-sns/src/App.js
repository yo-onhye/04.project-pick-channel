import React, { Component } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import Youtube from "./components/youtube";
import Lnb from "./components/lnb";
import "./App.css";

class App extends Component {
	id = 2;
	state = {
		channelId: "",
		channelName: "",
		channelDatas: [
			{
				id: 0,
				channelId: 'OLAK5uy_lAWlPRIDBvK8hLsDB3FM_SGGl4bTaw0Jc',
				channelName: '엣헴엣헴 신이나 핑크퐁 아기상어 가족동요',
			},
			{
				id: 1,
				channelId: 'PLawdY97HdndQ8gtbO-zJIZjBkyHsmtsQu',
				channelName: '뽀로로 상어 동요',
			}
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

	render() {
		const { isShow, channelId, channelName, channelDatas } = this.state;
		return (
			<div className='projectMain'>
				<div className="projcetLogo">
					<h1>Pick Channel<span>.</span></h1>
				</div>
				<ul className='projcetNav'>
					{channelDatas.map((d) => {
						return (
							<li>
								<NavLink to={`/04.project-pick-channel/${d.id}`} activeClassName="active">
									<span>#</span> {d.channelName}
								</NavLink>
							</li>
						);
					})}
				</ul>
				<Lnb channelId={channelId} channelName={channelName} data={channelDatas} isShow={isShow} onActiveLnb={this.handleLnb} onInsert={this.handleInsert} onChange={this.handleChange} onDelete={this.handleDelete} />
				<Switch>
					<Route exact path='/' render={() => <div className="projectError">메인화면</div>} />
					{channelDatas.map((d) => {
						return (
							<Route path={`/04.project-pick-channel/${d.id}`} render={() => <Youtube channelName={d.channelName} hannelId={d.channeId} /> }/>
						);
					})}
					<Route render={() => <div className="projectError">404 NOT FOUND :(</div>} />
				</Switch>
			</div>
		);
	}
}
export default App;
