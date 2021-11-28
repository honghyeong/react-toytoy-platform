import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-top">
          <ul>
            <li>
              <a href="">이용약관</a>
            </li>
            <li>
              <a href="">개인정보처리방침</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="footer-copyright">
          Copyright © 2019 - 2021 Theori Inc. All rights reserved.
        </div>
        <hr></hr>
        <div className="footer-bottom">
          <span>
            대표이사: Seokmin Hong | 상호: 토이토이 | 이메일: toytoy@toytoy.io |
            서울 강남구 테헤란로 414 5층 | 사업자등록번호: 263-81-00731 |
            통신판매업 신고번호: 제2021-서울강남-05520호 | 대표 연락처:
            070-8864-1337
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
