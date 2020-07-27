import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
	render() {
		const { data } = this.props;
		return (
			<section className='projectSection'>
				<div className='sectionTitle'>
					<h2>로그인</h2>
				</div>
				<div className='sectionCont'>
					<div className="loginBox">
						<form>
							<dl className="loginList">
								<dt><label htmlFor="userName">아이디</label></dt>
								<dd>
									<div className="projectInput">
										<input type="text" className="projectInputText" id="userName" name="uerName" placeholder="이메일을 입력해주세요." />
									</div>
								</dd>
							</dl>
							<dl className="loginList">
								<dt><label htmlFor="userPw">비밀번호</label></dt>
								<dd>
									<div className="projectInput">
										<input type="password" className="projectInputText" id="userPw" name="userPw" placeholder="비밀번호를 입력해주세요." />
										<span className="projectInvaildText">사용할 수 없는 비밀번호입니다.</span>
									</div>
								</dd>
							</dl>
							<button type="submit" className="loginBtn"><span>로그인</span></button>
						</form>
					</div>
				</div>
			</section>
		);
	}
}

export default Login;
