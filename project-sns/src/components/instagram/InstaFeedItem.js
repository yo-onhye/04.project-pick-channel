import React, { Component } from "react";

class InstaFeedItem extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		if (this.props.data !== nextProps.data) {
			return true;
		} else return false;
	}

	render() {
		const { owner, title, date, img, alt, like } = this.props.data;
		return (
			<div className='myfeedItem'>
				<div className='myfeedTop'>
					<p className='myfeedOwner'>{owner}</p>
					<p className='myfeedDate'>{date}</p>
				</div>
				<div className='myfeedCont'>
					<span className='myfeedMedia'>
						<img src={img} alt={alt} />
					</span>
					<p className='myfeedLike'>좋아요 {like} 개</p>
					<p className='myfeedTitle'>{title}</p>
				</div>
			</div>
		);
	}
}

export default InstaFeedItem;
