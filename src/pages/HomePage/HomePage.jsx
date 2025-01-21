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

            <div css={s.flexBox2}>
                <div css={s.displayContent}>

                    <div css={s.displayTitleNavBox}>
                        <p css={s.displayTitleFont}>전시</p>
                        
                        <div css={s.displayFlexBox}>
                            <p>전체</p>
                            <p>서울</p>
                            <p>과천</p>
                            <p>덕수궁</p>
                            <p>청주</p>
                            <p>어린이미술관</p>
                        </div>
                    
                        <p css={s.displayAllFont}>전시모두보기 ›</p>
                    </div>

                    <ul css={s.flexBox5}>

                        <li>
                            <div css={s.displayBoardInner}>
                                <div css={s.displayImgBlock}>이미지</div>

                                <div css={s.displayInfoBlock}>
                                    <a css={s.displayA}>
                                        <span css={s.displaySpanTittle}>덕수궁</span>
                                        <p css={s.displayP}>수묵별미(水墨別美): 한 · 중 근현대 회화</p>
                                        국립현대미술관과 중국 유일의 국립미술관인 중국미술관이 양국의 근현대 수묵채색화 걸작들을 한자리에서 선보인다.
                                    </a>
                                    
                                    <div css={s.tagBlock}>
                                        <div css={s.flexBox4}>
                                            <p css={s.tag13}>한국화</p>
                                            <p css={s.tag14}>중국화</p>
                                            <p css={s.tag15}>수묵화</p>
                                            <p css={s.tag16}>중국미술관 교류전</p>
                                        </div>
                                    </div>

                                    <span css={s.displaySpan}>2024-11-28~2025-02-16</span>

                                </div>

                            </div>
                        </li>

                        <li>
                            <div css={s.displayBoardInner}>
                                <div css={s.displayImgBlock}>이미지</div>

                                <div css={s.displayInfoBlock}>
                                    <a css={s.displayA}>
                                        <span css={s.displaySpanTittle}>과천</span>
                                        <p css={s.displayP}>한국 현대 도자공예: 영원의 지금에서 늘 새로운</p>
                                        1950년대부터 오늘날까지 역동적인 한국 현대 도자공예의 다채로운 모습 조명
                                    </a>
                                    
                                    <div css={s.tagBlock}>
                                        <div css={s.flexBox4}>
                                            <p css={s.tag17}>한국 현대 도자공예</p>
                                            <p css={s.tag18}>도자와 사회</p>
                                            <p css={s.tag19}>도자문화</p>
                                        </div>
                                    </div>

                                    <span css={s.displaySpan}>2024-11-21~2025-05-06</span>

                                </div>

                            </div>
                        </li>

                        <li>
                            <div css={s.displayBoardInner}>
                                <div css={s.displayImgBlock}>이미지</div>

                                <div css={s.displayInfoBlock}>
                                    <a css={s.displayA}>
                                        <span css={s.displaySpanTittle}>서울</span>
                                        <p css={s.displayP}>프로젝트 해시태그 2024</p>
                                        ‹프로젝트 해시태그 2024›는 다양한 분야의 차세대 창작 협업팀을 발굴하고 지원하는 공모프로그램이다
                                    </a>
                                    
                                    <div css={s.tagBlock}>
                                        <div css={s.flexBox4}>
                                            <p css={s.tag20}>프로젝트해시태그</p>
                                            <p css={s.tag21}>협업</p>
                                            <p css={s.tag22}>쇼케이스</p>
                                        </div>
                                    </div>

                                    <span css={s.displaySpan}>2024-11-15~2025-04-27</span>

                                </div>

                            </div>
                        </li>

                        <li>
                            <div css={s.displayBoardInner}>
                                <div css={s.displayImgBlock}>이미지</div>

                                <div css={s.displayInfoBlock}>
                                    <a css={s.displayA}>
                                        <span css={s.displaySpanTittle}>서울</span>
                                        <p css={s.displayP}>이강소: 風來水面時 풍래수면시</p>
                                        한국의 주요 실험미술운동을 관통한 이강소의 역사적인 작업을 중심으로, 작가의 개념적인 실천과 태도를 살펴보는 개인 주제전
                                    </a>
                                    
                                    <div css={s.tagBlock}>
                                        <div css={s.flexBox4}>
                                            <p css={s.tag23}>이강소</p>
                                            <p css={s.tag24}>한국실험미술</p>
                                            <p css={s.tag25}>개인전</p>
                                        </div>
                                    </div>

                                    <span css={s.displaySpan}>2024-11-01~2025-04-13</span>

                                </div>

                            </div>
                        </li>

                    </ul>

                    </div>
                </div>
                
            <div css={s.flexBox2}>
                <div css={s.collectionContent}>

                    <div css={s.collectionTitleBlock}>
                        <p css={s.collectionTitleFont}>소장품</p>

                        <p css={s.collectionAllFont}>소장품모두보기 ›</p>
                    </div>

                    <ul css={s.flexBox5}>

                        <li>
                            <div css={s.collectionBoardInner}>

                            </div>
                        </li>

                        <li>

                        </li>

                        <li>

                        </li>

                        <li>

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