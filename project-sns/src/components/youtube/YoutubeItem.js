import React, { Component } from 'react';
import './YoutubeItem.css';

class YoutubeItem extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		if (this.props !== nextProps) {
			return true;
		} else return false;
	}

	render() {
		const { owner, title, description, videoId } = this.props;
		return (
			<div className="myYoutubeItem">
				<div className='myYoutubeTop'>
					<p className='myYoutubeOwner'>{title}</p>
				</div>
				<div className='myYoutubeCont'>
					<div className='myYoutubeMedia'>
						<iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${videoId}`} title={title} frameBorder="0" allowFullScreen />
					</div>
					<p className='myYoutubeTitle'>[CHANNEL] {owner}</p>
					<p className='myYoutubeDetail'>{description}</p>
				</div>
			</div>
		);
	}
}

export default YoutubeItem;