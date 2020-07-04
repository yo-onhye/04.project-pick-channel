import React, { Component } from 'react';
import FeedItem from "./FeedItem";
import './FeedList.css';

class FeedList extends Component {
	state = {
		instaDatas: [
			{
				id: 0,
				owner: 'krwo_on',
				title: '😊',
				date: '2020.05.20',
				img: 'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/97120675_237414487520497_5200711069037953911_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=hr2-JDG_DyIAX-U55cV&oh=4037e84446bca3a67eb620f76ebc73cb&oe=5F29811A',
				alt: '커피를 들고있는 로운',
				text: '@klavuu_official',
			},
			{
				id: 1,
				owner: 'krwo_on',
				title: '🐵🙈🙉',
				date: '2020.04.22',
				img: 'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/94640167_113148170148036_6911238778677333131_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=vtkde9TTd4QAX89wUMF&oh=a07ed760029c4bf3f7d30808e9849a28&oe=5F2BE15F',
				alt: '칙촉을 들고있는 로운',
				text: '',
			},
			{
				id: 3,
				owner: 'krwo_on',
				title: '이쁜 구름',
				date: '2020.04.10',
				img: 'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/93225513_772222543306950_5089103843019600780_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=qPMdaD4qVhkAX-_Ifas&oh=ab2ba8332eb5a40aaf863fee17485155&oe=5F28749B',
				alt: '공차를 들고있는 로운',
				text: '',
			}
		]
	}

	render() {
		const { instaDatas } = this.state;
		return (
			<section class="projectSection">
				<div className="sectionTitle">
					<h2>Instargram</h2>
				</div>
				<ul className="myfeedList">
					{instaDatas.map(d => <li><FeedItem key={d.id} data={d} /></li>)}
				</ul>
			</section>
		);
	}
}

export default FeedList;