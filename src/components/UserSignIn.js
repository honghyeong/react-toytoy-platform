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
      <div id="__nuxt">
        <div className="__layout">
          <div className="layout-default">
            <header></header>
            <div className="main">
              <div className="page-login container">
                <div className="card login-card">
                  <div className="card-body">
                    <h2 className="text-center">로그인</h2>
                    <form className="form-group">
                      <input
                        type="text"
                        name="email"
                        placeholder="이메일"
                        value={email}
                        onChange={onChange}
                        className="form-control"
                      />
                      <input
                        type="text"
                        name="password"
                        placeholder="비밀번호"
                        value={password}
                        onChange={onChange}
                        className="form-control"
                      />
                      <div className="split">
                        <div className="left">
                          <div className="custom-checkbox">
                            <label>
                              <input
                                className="checkbox"
                                type="checkbox"
                                onClick={toggleCheck}
                                checked={check}
                              />
                            </label>
                          </div>
                          <div className="custom-autologin">자동로그인</div>
                        </div>
                        <div className="right">비밀번호 찾기</div>
                      </div>
                      <div className="user-login">
                        <button type="submit">로그인</button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="card signup-card">
                  토이토이가 처음이신가요?
                  <a href="/user/signup">회원가입</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserSignIn;
