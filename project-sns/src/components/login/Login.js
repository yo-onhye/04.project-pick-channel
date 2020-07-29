import React, { Component, createRef } from "react";
import "./Login.css";

class Login extends Component {
	userIdInput = createRef();
	userPwInput = createRef();

	render() {
		const { vaildAccount, userId, userPw, onChange, onCheckVaild } = this.props;
		return (
			<section className='projectSection'>
				<div className='sectionTitle'>
					<h2>로그인</h2>
				</div>
				<div className='sectionCont'>
					<div className="loginBox">
						<form onSubmit={onCheckVaild}>
							<dl className="loginList">
								<dt><label htmlFor="userId">아이디</label></dt>
								<dd>
									<div className="projectInput">
										<input type="text" className="projectInputText" id="userId" value={userId} name="userId" onChange={onChange} ref={this.userIdInput} placeholder="비밀번호를 입력해주세요." />
									</div>
								</dd>
							</dl>
							<dl className="loginList">
								<dt><label htmlFor="userPw">비밀번호</label></dt>
								<dd>
									<div className="projectInput">
										<input type="password" className="projectInputText" id="userPw" value={userPw} name="userPw" onChange={onChange} ref={this.userPwInput} placeholder="비밀번호를 입력해주세요." />
									</div>
								</dd>
							</dl>
							{!vaildAccount && <span className="projectInvaildText">아이디와 비밀번호를 확인해주세요.</span>}
							<button type="submit" className="loginBtn"><span>로그인</span></button>
						</form>
					</div>
				</div>
			</section>
		);
	}
}

export default Login;
