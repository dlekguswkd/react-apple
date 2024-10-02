//import 라이브러리
import React from 'react';
// import React, {useState} from 'react';	화면 상태관리
// import { Link } from 'react-router-dom';	링크걸기
// import { useSearchParams} from 'react-router-dom';	파라미터값사용하는 라우터

//import 컴포넌트
import Header from '../include/Header';

//import css
import '../../css/user.css';


const JoinForm = () => {

	/*---일반 변수 --------------------------------------------*/

	/*---라우터 관련------------------------------------------*/

	/*---상태관리 변수들(값이 변화면 화면 랜더링) ----------*/

	/*---일반 메소드 -----------------------------------------*/

	/*---생명주기 + 이벤트 관련 메소드 ----------------------*/


    return (
        <>
            <div id="wrap">

                <Header />
                {/* // header */}

                <div id="container">
                    
                    {/* <div id="aside"></div> */}

                    <div id="content">

                        <div id="user">

                            <div id="content-head">
                                <h1>Apple 계정 생성</h1>
                                <div id="intro-text">하나의 Apple 계정으로 모든 Apple 서비스를 이용할 수 있습니다.</div>
                            </div>
                            {/* // content-head */}

                            <div id="joinForm">
                                <form action='' method=''>

                                    {/* 아이디 */}
                                    <div className='form-group'>
                                        <input type='text' id='' name='' value='' onChange='' placeholder='아이디' />
                                    </div>

                                </form>

                            </div>
                            {/* // joinForm */}

                        </div>
                        {/* // user */}

                    </div>
                    {/* // content */}

                </div>
                {/* // container */}

            </div>
            {/* // wrap */}
        </>
    );
}

export default JoinForm;