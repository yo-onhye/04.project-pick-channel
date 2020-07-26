import React, { Component } from "react";
import axios from "axios";
import Masonry from 'react-masonry-component';
import YoutubeItem from "./YoutubeItem";
import "./YoutubeList.css";

const masonryOptions = {
	transitionDuration: 0
};
 
const imagesLoadedOptions = { background: '.my-bg-image-el' }

class YoutubeList extends Component {
	state = {
		youtubeDatas: null,
		loading: false,
	};

	getData = async () => {
		try {
			this.setState({
				loading: true,
			});

			const { channelId } = this.props;

			const response = await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${channelId}&maxResults=50&key=AIzaSyC3dYrIaoJUiV8HSSeJvje5ZPOB0zQPVLs`);

			this.setState({
				youtubeDatas: response.data.items,
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
		if (this.props.channelId !== prevProps.channelId) {
			this.getData();
		}
	}

	render() {
		const { youtubeDatas, loading } = this.state;
		const { channelName } = this.props;
		return (
			<section className='projectSection'>
				<div className='sectionTitle'>
					<h2>{channelName}</h2>
				</div>
				{loading && 
					<div className="LoadingContainer">
						<div className="LoadingAni"></div>
						<h3 className='LoadingText'>Loading</h3>
					</div>
				}
				<Masonry
						className={'myYoutubeList'}
						elementType={'ul'}
						options={masonryOptions}
						imagesLoadedOptions={imagesLoadedOptions}
				>
					{!loading &&
						youtubeDatas &&
						!youtubeDatas.error &&
						youtubeDatas.map((d) => (
							<li key={d.etag}>
								<YoutubeItem owner={d.snippet.channelTitle} title={d.snippet.title} description={d.snippet.description} videoId={d.snippet.resourceId.videoId} />
							</li>
						))}
				</Masonry>
			</section>
		);
	}
}

export default YoutubeList;
