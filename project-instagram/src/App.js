import React, { Component } from "react";
import FeedList from "./components/FeedList";
import './App.css'

class App extends Component {

	render() {
		return (
			<div className="projectMain">
				<FeedList />
			</div>
		);
	}
}

export default App;
