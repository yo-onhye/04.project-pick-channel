import React, { Component } from 'react';
import YoutubeItem from "./YoutubeItem";
import './YoutubeList.css';

class YoutubeList extends Component {
	state = {
	}

	render() {
		return (
			<section className="projectSection">
				<div className="sectionTitle">
					<h2>Youtube</h2>
				</div>
				<ul className="myfeedList">
					<YoutubeItem />
				</ul>
			</section>
		);
	}
}

export default YoutubeList;