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
						<NavLink exact to='/' activeClassName="active">
							# Instagram
						</NavLink>
					</li>
					<li>
						<NavLink to='/twitter' activeClassName="active">
							# Twitter
						</NavLink>
					</li>
					<li>
						<NavLink to='/youtube' activeClassName="active">
							# Youtube
						</NavLink>
					</li>
				</ul>
				{/* <Instagram />
				<Twitter />
				<Youtube /> */}
				<Switch>
					<Route exact path='/' component={Instagram} />
					<Route path='/twitter' component={Twitter} />
					<Route path='/youtube' component={Youtube} />
					<Route render={() => <div className="projectError">404 NOT FOUND :(</div>} />
				</Switch>
			</div>
		);
	}
}
export default App;
