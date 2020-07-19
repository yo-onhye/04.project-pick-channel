import React, { Component } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import Youtube from "./components/youtube";
import Lnb from "./components/lnb";
import "./App.css";

class App extends Component {
	id = 1;

	state = {
		channelId: "",
		data: [],
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
	}

	handleChange = (e) => {
		const { value, name } = e.target;
		this.setState({
			[name]: value,
		});
	};

	handleInsert = (e) => {
		e.preventDefault();

		const { data, channelId } = this.state;
		this.setState({
			channelId: "",
			data: data.concat({
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
			data: this.state.data.filter((user) => user.id !== id),
		});
	};


	render() {
		const { isShow, channelId, data } = this.state;
		return (
			<div className='projectMain'>
				<div className="projcetLogo">
					<h1>Pick Channel<span>.</span></h1>
				</div>
				<nav className='projcetNav'>
					<ul className='projcetNavList'>
						<li>
							<NavLink exact to='/04.project-pick-channel/Channel01' activeClassName="active">
								<span>#</span> Channel01
							</NavLink>
						</li>
						<li>
							<NavLink to='/04.project-pick-channel/Channel02' activeClassName="active">
								<span>#</span> Channel02
							</NavLink>
						</li>
						<li>
							<NavLink to='/04.project-pick-channel/Channel03' activeClassName="active">
								<span>#</span> Channel03
							</NavLink>
						</li>
					</ul>
				</nav>
				<Lnb channelId={channelId} data={data} isShow={isShow} onActiveLnb={this.handleLnb} onInsert={this.handleInsert} onChange={this.handleChange} onDelete={this.handleDelete} />
				<Switch>
					<Route exact path='/' component={Youtube} />
					<Route path='/04.project-pick-channel/Channel01' component={Youtube} />
					<Route path='/04.project-pick-channel/Channel02' component={Youtube} />
					<Route path='/04.project-pick-channel/Channel03' component={Youtube} />
					<Route render={() => <div className="projectError">404 NOT FOUND :(</div>} />
				</Switch>
			</div>
		);
	}
}
export default App;
