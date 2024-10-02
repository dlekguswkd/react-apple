// src/Footer.jsx
import React from 'react';
import '../../css/footer.css';

const Footer = () => {
  return (
    <footer className="apple-footer">
      {/* 회사 정보 섹션 */}
      <div className="company-info">
        <p>사업자등록번호: 120-81-84429 | 통신판매업신고번호: 제 2011-서울강남-00810호</p>
        <p>대표이사: PETER DENWOOD | 주소: 서울 특별시 강남구 영동대로 517</p>
        <p>대표전화: 080-330-8877 | 팩스: 02-6928-0000</p>
      </div>

      {/* 푸터 상단 섹션 */}
      <div className="footer-top">
        <div className="footer-section">
          <h4>쇼핑 및 알아보기</h4>
          <ul>
            <li><a href="/">Store</a></li>
            <li><a href="/">Mac</a></li>
            <li><a href="/">iPad</a></li>
            <li><a href="/">iPhone</a></li>
            <li><a href="/">Watch</a></li>
            <li><a href="/">AirPods</a></li>
            <li><a href="/">TV 및 홈</a></li>
            <li><a href="/">AirTag</a></li>
            <li><a href="/">액세서리</a></li>
            <li><a href="/">지갑</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>계정</h4>
          <ul>
            <li><a href="/">Apple 계정 관리</a></li>
            <li><a href="/">Apple Store 계정</a></li>
            <li><a href="/">iCloud.com</a></li>
          </ul>
          <h4>엔터테인먼트</h4>
          <ul>
            <li><a href="/">Apple One</a></li>
            <li><a href="/">Apple TV+</a></li>
            <li><a href="/">Apple Music</a></li>
            <li><a href="/">Apple Arcade</a></li>
            <li><a href="/">Apple Podcasts</a></li>
            <li><a href="/">Apple Books</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Apple Store</h4>
          <ul>
            <li><a href="/">매장 찾기</a></li>
            <li><a href="/">Genius Bar</a></li>
            <li><a href="/">Today at Apple</a></li>
            <li><a href="/">Apple 캠프</a></li>
            <li><a href="/">Apple Store 앱</a></li>
            <li><a href="/">인증 리퍼비쉬 제품</a></li>
            <li><a href="/">Apple Trade In</a></li>
            <li><a href="/">주문 상태</a></li>
            <li><a href="/">쇼핑 도움말</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>비즈니스</h4>
          <ul>
            <li><a href="/">Apple과 비즈니스</a></li>
            <li><a href="/">비즈니스를 위한 제품 쇼핑하기</a></li>
          </ul>
          <h4>교육</h4>
          <ul>
            <li><a href="/">Apple 그리고 교육</a></li>
            <li><a href="/">초중고용 제품 쇼핑하기</a></li>
            <li><a href="/">대학생을 위한 제품 쇼핑하기</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Apple의 가치관</h4>
          <ul>
            <li><a href="/">손쉬운 사용</a></li>
            <li><a href="/">환경</a></li>
            <li><a href="/">개인정보 보호</a></li>
            <li><a href="/">공급망</a></li>
          </ul>
          <h4>Apple 정보</h4>
          <ul>
            <li><a href="/">Newsroom</a></li>
            <li><a href="/">Apple 리더십</a></li>
            <li><a href="/">채용 안내</a></li>
            <li><a href="/">윤리 및 규정 준수</a></li>
            <li><a href="/">이벤트</a></li>
            <li><a href="/">입찰과 창출</a></li>
            <li><a href="/">Apple 연락처</a></li>
          </ul>
        </div>
      </div>

      {/* 푸터 하단 섹션 */}
      <div className="footer-bottom">
        <p>다양한 쇼핑 방법: <a href="/">Apple Store를 방문</a>하거나, <a href="/">리셀러</a>를 찾아보거나, 080-330-8877번으로 전화하세요.</p>
        <p>Copyright © 2024 Apple Inc. 모든 권리 보유. | <a href="/">개인정보 처리방침</a> | <a href="/">약관</a> | <a href="/">판매 및 환불</a> | <a href="/">법적 고지</a> | <a href="/">사이트 맵</a> | 대한민국</p>
      </div>
    </footer>
  );
};

export default Footer;
