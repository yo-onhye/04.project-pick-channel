import React, { Component } from 'react';
import axios from 'axios';
import InstaFeedItem from "./InstaFeedItem";

class InstaFeedList extends Component {
	state = {
		loading: false,
		instaDatas: null,
	};

	getData = async () => {
		try {
			this.setState({
				loading: true,
			});

			const response = await axios.get('https://yo-onhye.github.io/04.project-collect-sns/project-sns/src/components/instagram/InstagramDatas.json');

			this.setState({
				instaDatas: response.data,
			});

		} catch (e) {
			console.error(e);
		}
		this.setState({
			loading: false,
		});
	};

	componentDidMount() {
		this.getData();
	}

	componentDidUpdate(prevProps, prevState) {
		if (
			this.props.instaDatas !== prevProps.instaDatas
		) {
			this.getData();
		}
	}


	render() {
		const { instaDatas, loading } = this.state;
		return (
			<section className="projectSection">
				<div className="sectionTitle">
					<h2>Instargram</h2>
				</div>
				{loading && <h3 className="myfeedInfotxt">데이터 로딩 중 입니다:D</h3>}
				<ul className="myfeedList">
					{!loading &&
					instaDatas &&
					!instaDatas.error &&
					instaDatas.data.map(d => <li><InstaFeedItem key={d.id} data={d} /></li>)}
				</ul>
			</section>
		);
	}
}

export default InstaFeedList;