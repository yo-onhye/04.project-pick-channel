import React, { Component } from 'react';
import './FeedItem.css';

class FeedItem extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		if(this.props.data !== nextProps.data) {
			return true;
		} else return false;
	}

	render() {
		const {
			title,
			date,
			img,
			alt,
			text,
		} = this.props.data;
		return (
			<div className="myfeedItem">
				<div className="myfeedTop">
					<p className="myfeedTitleDate">{date}</p>
				</div>
				<div className="myfeedCont">
					<span className="myfeedImg">
						<img src={img} alt={alt} />
					</span>
					<p className="myfeedTitle">{title}</p>
					<p className="myfeedDetail">{text}</p>
				</div>
			</div>
		);
	}
}

export default FeedItem;