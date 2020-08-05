import React, { Component, createRef } from "react";
import "./Signup.css";

class Login extends Component {
	signupIdInput = createRef();
	signupPwInput = createRef();
	signupRepwInput = createRef();
	signupNameInput = createRef();

	render() {
		const { signupId, signupPw, signupRepw, signupName, validText, vaildInfo, onChange, checkJoinInfo } = this.props;
			console.log(signupId);
		return (
			<section className='projectSection'>
				<div className='sectionTitle'>
					<h2>회원가입</h2>
				</div>
				<div className='sectionCont'>
					<div className="signupBox">
						<form onSubmit={checkJoinInfo}>
							<dl className="signupList">
								<dt><label htmlFor="signupId">아이디</label></dt>
								<dd>
									<div className="projectInput">
										<input type="text" className="projectInputText" id="signupId" value={signupId} name="signupId" onChange={onChange} ref={this.signupIdInput} placeholder="아이디를 입력해주세요." />
									</div>
								</dd>
							</dl>
							<dl className="signupList">
								<dt><label htmlFor="signupPw">비밀번호</label></dt>
								<dd>
									<div className="projectInput">
										<input type="password" className="projectInputText" id="signupPw" value={signupPw} name="signupPw" onChange={onChange} ref={this.signupPwInput} placeholder="비밀번호를 입력해주세요." />
									</div>
								</dd>
							</dl>
							<dl className="signupList">
								<dt><label htmlFor="signupRepw">비밀번호 재입력</label></dt>
								<dd>
									<div className="projectInput">
										<input type="password" className="projectInputText" id="signupRepw" value={signupRepw} name="signupRepw" onChange={onChange} ref={this.signupRepwInput} placeholder="비밀번호를 다시 입력해주세요." />
									</div>
								</dd>
							</dl>
							<dl className="signupList">
								<dt><label htmlFor="signupName">이름</label></dt>
								<dd>
									<div className="projectInput">
										<input type="text" className="projectInputText" id="signupName" value={signupName} name="signupName" onChange={onChange} ref={this.signupNameInput} placeholder="이름을 입력해주세요." />
									</div>
								</dd>
							</dl>
							{vaildInfo && <span className="projectInvaildText">{validText}</span>}
							<button type="submit" className="signupBtn"><span>회원가입</span></button>
						</form>
					</div>
				</div>
			</section>
		);
	}
}

export default Login;
