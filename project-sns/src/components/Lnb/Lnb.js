import React, { Component, createRef } from "react";
import "./Lnb.css";

class Lnb extends Component {
	channelIdInput = createRef();
	channelNameInput = createRef();

	render() {
		const { channelId, channelName, data, isShow, onActiveLnb, onInsert, onDelete, onChange } = this.props;
		return (
			<div className={`projectLnb ${isShow && "is-active"}`}>
				<button type="button" className="projcetBtnNav" onClick={onActiveLnb}>
					<span className="projcetBtnBox">
						<span className="projcetBtnInner"><span className="blind">채널 관리하기</span></span>
					</span>
				</button>
				<div className='projectLnbInner'>
					<form onSubmit={onInsert}>
						<div className='projectLnbInput'>
							<input value={channelId} name='channelId' onChange={onChange} ref={this.channelIdInput} title='채널 ID를 입력해주세요.' placeholder='채널 ID를 입력해주세요.' />
							<input value={channelName} name='channelName' onChange={onChange} ref={this.channelNameInput} title='채널 명을 입력해주세요.' placeholder='채널 명을 입력해주세요.' />
							<button type='submit' className='projectLnbBtn'>추가하기</button>
						</div>
					</form>
					<ul className='projectChannelList'>
						{data.map((d) => {
							return (
								<li key={d.id}>
									<p>{d.channelName}</p>
									<button type='button' className='BtnChannelRemove' onClick={() => onDelete(d.id)}>
										<span className='blind'>삭제하기</span>
									</button>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		);
	}
}

export default Lnb;
