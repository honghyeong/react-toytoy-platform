import React, { useState } from "react";
import "../css/UserSignIn.scss";

const UserSignIn = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [check, setCheck] = useState(false);

  const { email, password } = state;
  const onChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const toggleCheck = () => {
    setCheck((prev) => !prev);
  };

  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100&display=swap');
      </style>
      <div className="layout-default">
        <div className="login-container">
          <div className="login-card">
            <div className="login-card-main">
              <div className="login-top">
                <h3>로그인</h3>
              </div>
              <div className="login-input">
                <input
                  name="email"
                  placeholder="이메일"
                  type="text"
                  value={email}
                  onChange={onChange}
                />
                <input
                  name="password"
                  placeholder="패스워드"
                  type="password"
                  value={password}
                  onChange={onChange}
                />
              </div>
              <div className="login-split">
                <div className="login-checkbox">
                  <input
                    type="checkbox"
                    checked={check}
                    onClick={toggleCheck}
                  />
                  <div className="login-auto">자동 로그인</div>
                </div>
                <div className="login-search-pw">비밀번호 찾기</div>
              </div>
              <div className="login-button">
                <button className="login-button-btn">로그인</button>
              </div>
            </div>
          </div>
          <div className="login-signup">
            <br />
            <span>토이토이가 처음이신가요? </span>
            <a href="/users/signup"> 회원가입</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserSignIn;
