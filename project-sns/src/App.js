import React, { Component } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import Youtube from "./components/youtube";
import "./App.css";

class App extends Component {
	render() {
		return (
			<div className='projectMain'>
				<div className="projcetLogo">
					<h1>Pick Channel<span>.</span></h1>
				</div>
				<ul className='projcetNav'>
					<li>
						<NavLink exact to='/Channel01' activeClassName="active">
							<span>#</span> Channel01
						</NavLink>
					</li>
					<li>
						<NavLink to='/Channel02' activeClassName="active">
							<span>#</span> Channel02
						</NavLink>
					</li>
					<li>
						<NavLink to='/Channel03' activeClassName="active">
							<span>#</span> Channel03
						</NavLink>
					</li>
				</ul>
				<Switch>
					<Route exact path='/04.project-collect-sns' component={Youtube} />
					<Route path='/04.project-collect-sns/Channel02' component={Youtube} />
					<Route path='/04.project-collect-sns/Channel03' component={Youtube} />
					<Route render={() => <div className="projectError">404 NOT FOUND :(</div>} />
				</Switch>
			</div>
		);
	}
}
export default App;
