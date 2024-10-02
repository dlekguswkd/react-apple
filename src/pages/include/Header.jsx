// src/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingBag } from 'react-icons/fa';

// CSS
import '../../css/header.css';

const Header = () => {
  return (
    <header className="apple-header">
      {/* 상단 헤더 */}
      <div className="header-top">
        <div className="logo">
          <Link to="/">
            {/* 실제 애플 로고 이미지 사용 */}
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" />
          </Link>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="검색" />
          <button className="search-btn">
            <FaSearch />
          </button>
        </div>
        <div className="auth-cart-icons">
          <Link to="/" className="auth-btn">로그인</Link>
          <Link to="/" className="auth-btn">회원 가입</Link>
          <FaShoppingBag className="icon" />
        </div>
      </div>
      
      {/* 하단 헤더 */}
      <div className="header-bottom">
        <nav className="nav-links">
          <Link to="/">iPhone</Link>
          <Link to="/">Accessories</Link>
          <Link to="/">Community</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
