import React, { useEffect, useState } from "react";
import { authService } from "../fBase";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import "../css/UserSignIn.scss";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";

const UserSignIn = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [newAccount, setNewAccount] = useState(true);
  const [check, setCheck] = useState(false);
  const [error, setError] = useState("");

  const { email, password } = state;
  const onChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (newAccount === false) {
      navigate("/");
    }
  }, [newAccount]);

  const toggleCheck = () => {
    setCheck((prev) => !prev);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      if (newAccount) {
        const data = await createUserWithEmailAndPassword(
          authService,
          email,
          password
        );
      } else {
        const data = await signInWithEmailAndPassword(
          authService,
          email,
          password
        );
      }
      setNewAccount(false);
    } catch (error) {
      setError(error.message);
    }
  };

  const onSocialClick = async (event) => {
    const { name } = event.target;
    console.log(name);
    let provider;
    try {
      if (name === "google") {
        provider = new GoogleAuthProvider();
        const data = await signInWithPopup(authService, provider);
      } else if (name === "facebook") {
        provider = new FacebookAuthProvider();
        const data = await signInWithPopup(authService, provider);
      }
      setNewAccount(false);
    } catch (error) {
      console.log(error);
    }
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
                <h3>?????????</h3>
              </div>
              <div className="login-input">
                <input
                  name="email"
                  placeholder="?????????"
                  type="text"
                  value={email}
                  onChange={onChange}
                />
                <input
                  name="password"
                  placeholder="????????????"
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
                  <div className="login-auto">?????? ?????????</div>
                </div>
                <div className="login-search-pw">???????????? ??????</div>
              </div>
              <div className="login-button">
                <button onClick={onSubmit} className="login-button-btn">
                  ?????????
                </button>
              </div>
              <div className="login-sns">
                <div className="login-sns-container">
                  <img
                    onClick={onSocialClick}
                    className="login-sns-img"
                    name="google"
                    src={google}
                    alt="google"
                  />

                  <img
                    onClick={onSocialClick}
                    className="login-sns-img"
                    name="facebook"
                    src={facebook}
                    alt="facebook"
                  />
                </div>
                <div>SNS??? ???????????????</div>
              </div>
            </div>
          </div>
          <div className="login-signup">
            <br />
            <span>??????????????? ??????????????????? </span>
            <a href="/users/signup"> ????????????</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserSignIn;
