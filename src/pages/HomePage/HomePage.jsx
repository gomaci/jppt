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

                <div css={s.flexBox}>
                    <div>
                        <div css={s.logoBox}>
                            <h1><Link to={'/'} >LOGO 국립현대미술관</Link></h1>          
                        </div>

                    <div css={s.navBlock}>
                            <div css={s.navBox}>
                                <p><Link to={'/page/viewingparticipation'} >관람.참여</Link></p>
                                <p><Link to={'/page/display'} >전시</Link></p>
                                <p><Link to={'/page/education'} >교육</Link></p>
                                <p><Link to={'/page/collection'} >소장품</Link></p>
                                <p><Link to={'/page/artresearch'} >미술연구</Link></p>
                                <p><Link to={'/page/digitalartmuseum'} >디지털미술관</Link></p>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div css={s.mainContent}>

                        <div css={s.inMainContent}>

                            <div css={s.imgBlock}>이미지</div>

                            <p>[서울]올해의 작가상 2024</p>

                        </div>

                    </div>
                </div>
              

            <div css={s.flexBox2}>
                <div css={s.artGalleryContent}>

                    <div css={s.artGalleryTitleBlock}>
                        <p>미술관</p>
                    </div>


                <div>
                    
                </div>
                    <ul css={s.flexBox3}>
                        <li>
                            <div css={s.boardInner}>
                                <div css={s.imgBlock2}>이미지</div>

                                <div css={s.infoBlock}>
                                    <p>서울</p>
                                    <span>월요일,화요일,목요일,금요일,일요일 10:00–18:00
                                    수요일, 토요일 야간개장 10:00–21:00</span>
                                    <div>
                                        <div css={s.tagBlock}>
                                            <div css={s.flexBox4}>
                                                <p css={s.tag1}>전시</p>
                                                <p css={s.tag2}>필름앤비디오</p>
                                                <p css={s.tag3}>다원예술</p>
                                            </div>
                                            
                                            <div css={s.flexBox4}>
                                                <p css={s.tag4}>교육</p>
                                                <p css={s.tag5}>이벤트</p>
                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div css={s.boardInner}>
                                <div css={s.imgBlock2}>이미지</div>

                                <div css={s.infoBlock}>
                                    <p>과천</p>
                                    <span>화요일–일요일(월요일 휴관), 10:00–18:00</span>
                                    <div css={s.tagBlock}>
                                        <div css={s.flexBox4}>
                                            <p css={s.tag6}>전시</p>
                                            <p css={s.tag7}>교육</p>
                                            <p css={s.tag8}>어린이미술관</p>
                                            <p css={s.tag9}>이벤트</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div css={s.boardInner}>
                                <div css={s.imgBlock2}>이미지</div>

                                <div css={s.infoBlock}>
                                    <p>덕수궁</p>
                                    <span>화요일,목요일,금요일,일요일(월요일 휴관), 10:00–18:00 수요일, 토요일 야간개장 10:00–21:00</span>
                                    <div css={s.tagBlock}>
                                        <div css={s.flexBox4}>
                                            <p css={s.tag10}>전시</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div css={s.boardInner}>
                                <div css={s.imgBlock2}>이미지</div>

                                <div css={s.infoBlock}>
                                    <p>청주</p>
                                    <span>화요일–일요일(월요일 휴관), 10:00–18:00</span>
                                    <div css={s.tagBlock}>
                                        <div css={s.flexBox4}>
                                            <p css={s.tag11}>전시</p>
                                            <p css={s.tag12}>이벤트</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        
                    </ul>


                   
                </div>

            </div>
                
    
               
                
            </div>

            <div >

            </div>
        </div>
    );
}

export default HomePage;