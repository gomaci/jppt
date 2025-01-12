import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { Link } from 'react-router-dom';

function HomePage(props) {
    return (
        <div>
            <div css={s.header}>

                <div css={s.inheader}>

                    <div css={s.spanBox1}>
                        <span><Link to={'/mmca/join'} >MMCA 회원가입</Link></span>
                        <span><Link to={'/mmca/login'} >로그인</Link></span>
                    </div>

                    <div css={s.spanBox2}>
                        <span>검색아이콘</span>
                        <select>KO:한국어</select>
                    </div>

                </div>

            </div>

            <div css={s.main}>

                <div>
                     <div css={s.logoBox}>
                        <h1><Link to={'/'} >LOGO 국립현대미술관</Link></h1>          
                    </div>

                    <div css={s.navStickyBlock}>
                        <div css={s.navBox}>
                            {/* Link는 눌렀을 때 저 주소로 타고 들어가는 용용 */}
                            <p><Link to={'/page/viewingparticipation'} >관람.참여</Link></p>
                            <p><Link to={'/page/display'} >전시</Link></p>
                            <p><Link to={'/page/education'} >교육</Link></p>
                            <p><Link to={'/page/collection'} >소장품</Link></p>
                            <p><Link to={'/page/artresearch'} >미술연구</Link></p>
                            <p><Link to={'/page/digitalartmuseum'} >디지털미술관</Link></p>
                        </div>
                    </div>
                </div>
                  

                {/* <div css={s.inline}> */}
                    <div css={s.mainContent}>

                        <div css={s.inMainContent}>

                            <div css={s.imgBlock}>이미지</div>

                            <p>[서울]올해의 작가상 2024</p>

                        </div>

                    </div>
                {/* </div> */}
               
                   


              
            </div>

            <div >

            </div>
        </div>
    );
}

export default HomePage;