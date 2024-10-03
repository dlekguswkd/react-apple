//import 라이브러리
import React from 'react';
import { Link } from 'react-router-dom';	
// import React, {useState} from 'react';	화면 상태관리
// import { useSearchParams} from 'react-router-dom';	파라미터값사용하는 라우터

//import 컴포넌트
import Header from '../include/Header';
import Footer from '../include/Footer';


//import css
import '../../css/community.css';


const Comment = () => {

	/*---일반 변수 --------------------------------------------*/

	/*---상태관리 변수들(값이 변화면 화면 랜더링) ----------*/

	/*---일반 메소드 -----------------------------------------*/

	/*---생명주기 + 이벤트 관련 메소드 ----------------------*/


    return (
        <>
            <Header />
            {/* // header */}

            <div id="wrap">

                <div id="container">

                    <div id="nav">
                        <Link to="" rel="noreferrer noopener">커뮤니티</Link>
                        <br /><br /><br />
                    </div>
                    
                    {/* <div id="aside"></div> */}

                    <div id="content">
                        <div className="user-info">
                            <img className="join-png" src="/images/person.svg" alt="프로필사진"/>
                            <span>userId</span>
                            <span>작성자</span>
                            <br />
                            <span>상품이름 ex_ iPhone 16</span>
                        </div>

                        <div className="contents">
                            <p>제목 ex_아이폰 16 카메라 튕김</p>
                            <p>내용 ex_카메라 켜서 촬영하면 먹통이되고 바탕화면으로 자동으로 튕깁니다…
                                20일에 구매하였고 재부팅하면 또 안그러는데 구매 후 이틀만에 이런 현상이 두번이나 일어났습니다… 개인 메일주소를 남겨주시면 보다 자세한 동영상을 
                                첨부해 드리겠습니다. 왜그럴까요?
                            </p>
                            <p>게시일: 2024.9.22 오후 02:16</p>
                        </div>
                        {/* // contents */}

                        <button type='button'>답글</button>

                        <div id="comment">
                            <div class="clearfix">
                                <span>댓글: 10</span>
                                <span>정렬기준: 최신순</span>
                            </div>
                            
                            <form action='' method='' onSubmit="">
                                <div className="user-info">
                                    <img className="join-png" src="/images/person.svg" alt="프로필사진"/>
                                    <span>userId</span>
                                </div>
                                <p>누구~님에게 답변 2024.9.22 오후 02:16</p>
                                <div className="contents">
                                    <p>저도 그런증상인데 하드웨어는 문제없고 소프트웨어 문제인것 같다고 고객센터 문의해서 답변 받았어요 ㅠㅠ 카메라앱을 지우고 다시 깔거나 핸드폰 초기화 하라고 
                                        하네요... 기본앱이라 지워지지도 않던데..ㅠㅠ 핸드폰 반품하고 싶어요 진짜 짜증나서 ㅠㅠ
                                    </p>
                                </div>
                                <button type='button'>답글</button>

                                <div className="user-info">
                                    <img className="join-png" src="/images/person.svg" alt="프로필사진"/>
                                    <span>userId</span>
                                </div>
                                <p>누구~님에게 답변 2024.11.19 오후 07:43</p>
                                <div className="contents">
                                    <p>
                                        저도 똑같아요. 이게 전체적으로 소프트웨어 문제인가요.. 초기화 힘든데..
                                    </p>
                                </div>
                                <button type='button'>답글</button>
                            </form>
                        </div>
                        {/* // comment */}

                    </div>
                    {/* // content */}

                </div>
                {/* // container */}

            </div>
            {/* // wrap */}

            <Footer />
            {/* // Footer */}
        </>
    );
}

export default Comment;