import React, { Component } from "react";

class TwitterFeedItem extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		if (this.props.data !== nextProps.data) {
			return true;
		} else return false;
	}

	render() {
		const { owner, title, date, img, alt, like, retweet } = this.props.data;
		return (
			<div className='myfeedItem'>
				<div className='myfeedTop'>
					<p className='myfeedOwner'>{owner}</p>
					<p className='myfeedDate'>{date}</p>
				</div>
				<div className='myfeedCont'>
					<p className='myfeedTitle'>{title}</p>
					<div className='myfeedMedia'>
						{!img == "" && <img src={img} alt={alt} />}
					</div>
					<div className="myfeedCount">
						<span className="myfeedCountCell">좋아요 {like}</span>
						<span className="myfeedCountCell">리트윗 {retweet}</span>
					</div>
				</div>
			</div>
		);
	}
}

export default TwitterFeedItem;
