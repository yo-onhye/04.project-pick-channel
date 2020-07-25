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
		const profile = "https://yt3.ggpht.com/a/AATXAJxm7wEEy5A7qu3-C4TxQ4Xzp6OTPRC5KWxINhEeVw=s100-c-k-c0xffffffff-no-rj-mo";
		return (
			<div className="myYoutubeItem">
				<div className='myYoutubeTop'>
					<span className="myYoutubeProfile"><img src={profile} alt="" /></span>
					<p className='myYoutubeOwner'>{owner}</p>
				</div>
				<div className='myYoutubeCont'>
					<div className='myYoutubeMedia'>
						<iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${videoId}`} title={title} frameBorder="0" />
					</div>
					<p className='myYoutubeTitle'>{title}</p>
					<p className='myYoutubeDetail'>{description}</p>
				</div>
			</div>
		);
	}
}

export default YoutubeItem;