import React from "react";

const Header = () => {
  return (
    <nav class="navigation-bar">
      <div className="nav-left">
        <img src="logo.svg" alt="logo.svg"></img>
      </div>
      <div className="nav-middle">
        <ul>
          <li>
            <a href="/age">Age</a>
          </li>
          <li>
            <a href="/price">Price</a>
          </li>
          <li>
            <a href="/youtuber">Youtuber</a>
          </li>
        </ul>
      </div>
      <div className="nav-right">
        <div className="nav-search">
          <img src="search.svg" alt="search.svg"></img>
        </div>
        <div className="nav-login">
          <a href="/users/login">로그인</a>
        </div>
        <div className="nav-singup">
          <a href="/users/login">가입</a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
