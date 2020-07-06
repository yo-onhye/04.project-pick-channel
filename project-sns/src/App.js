import React, { Component } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import Instagram from "./components/instagram";
import Twitter from "./components/twitter";
import Youtube from "./components/youtube";
import "./App.css";

class App extends Component {
	render() {
		return (
			<div className='projectMain'>
				<div className="projcetLogo">
					<h1>Rowoon<span>.</span></h1>
				</div>
				<ul className='projcetNav'>
					<li>
						<NavLink exact to='/rw/instagram' activeClassName="active">
							<span>#</span> Instagram
						</NavLink>
					</li>
					<li>
						<NavLink to='/rw/twitter' activeClassName="active">
							<span>#</span> Twitter
						</NavLink>
					</li>
					<li>
						<NavLink to='/rw/youtube' activeClassName="active">
							<span>#</span> Youtube
						</NavLink>
					</li>
				</ul>
				<Switch>
					<Route exact path='/' component={Instagram} />
					<Route path='/rw/instagram' component={Instagram} />
					<Route path='/rw/twitter' component={Twitter} />
					<Route path='/rw/youtube' component={Youtube} />
					<Route render={() => <div className="projectError">404 NOT FOUND :(</div>} />
				</Switch>
			</div>
		);
	}
}
export default App;
