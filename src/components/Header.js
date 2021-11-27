import React, { useEffect, useState } from "react";
import "../css/Header.scss";
import logo from "../assets/logo.svg";
import search from "../assets/search.svg";
import togglemenu from "../assets/togglemenu.svg";

const Header = () => {
  const [width, setWidth] = useState(window.innerWidth > 620);
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  const handlerResize = () => {
    if (window.innerWidth > 620) {
      setWidth(true);
      setToggle(false);
    } else {
      setWidth(false);
    }
  };

  const clickHome = (event) => {
    window.location.href = "/";
  };

  useEffect(() => {
    window.addEventListener("resize", handlerResize);
    return () => {
      window.removeEventListener("resize", handlerResize);
    };
  }, []);

  return (
    <>
      <header>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100&display=swap');
        </style>
        <nav class="navigation-bar">
          <div className="nav-left">
            {width ? (
              <></>
            ) : (
              <>
                <div className="nav-toggle-menu">
                  <img
                    onClick={handleToggle}
                    src={togglemenu}
                    alt="toggle-menu"
                  />
                </div>
              </>
            )}
            {toggle && !width ? (
              <>
                <img className="toggle-logo" src="logo.svg" alt="logo.svg" />
              </>
            ) : (
              <img
                onClick={clickHome}
                className="nav-logo"
                src={logo}
                alt="logo.svg"
              />
            )}
          </div>
          {width ? (
            <>
              <div className="nav-middle">
                <ul>
                  <li className="nav-link">
                    <a href="/age">Age</a>
                  </li>
                  <li className="nav-link">
                    <a href="/price">Price</a>
                  </li>
                  <li className="nav-link">
                    <a href="/youtuber">Youtuber</a>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <></>
          )}
          <div className="nav-right">
            <div className="nav-search">
              <img className="nav-search" src={search} alt="search.svg"></img>
            </div>
            <div className="nav-login">
              <a href="/users/login">로그인</a>
            </div>
            <div className="nav-signup">
              <a href="/users/signup">가입</a>
            </div>
          </div>
        </nav>
        {toggle && !width ? (
          <>
            <nav className="mobile-navigation-bar">
              <div className="overlay"></div>
              <div className="toggle-container">
                <div className="toggle-top"></div>
                <div className="toggle-menu-home">
                  <a href="/">Home</a>
                </div>
                <div className="toggle-menu">
                  <a href="/Age">Age</a>
                </div>
                <div className="toggle-menu">
                  <a href="/Price">Price</a>
                </div>
                <div className="toggle-menu">
                  <a href="/Youtuber">Youtuber</a>
                </div>
              </div>
            </nav>
          </>
        ) : (
          <></>
        )}
      </header>
    </>
  );
};

export default Header;
