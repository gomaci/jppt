import { Global } from '@emotion/react';
import React from 'react';
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';
import {reset} from './styles/global';
import ViewingParticipationPage from './pages/ViewingParticipationPage/ViewingParticipationPage';
import DisplayPage from './pages/DisplayPage/DisplayPage';
import EducationPage from './pages/EducationPage/EducationPage';
import CollectionPage from './pages/CollectionPage/CollectionPage';
import ArtResearchPage from './pages/ArtResearchPage/ArtResearchPage';
import DigitalArtMuseumPage from './pages/DigitalArtMuseumPage/DigitalArtMuseumPage';
import JoinPage from './pages/JoinPage/JoinPage';
import LoginPage from './pages/LoginPage/LoginPage';


function App(props) {
    return (
    <>
        <Global styles={reset}/>
        <Routes>
            {/* Route는 저 주소로 들어갔을 때 띄울 컴포넌트 설정 */}
            <Route path='/mmca/join' element={<JoinPage />} />
            <Route path='/mmca/login' element={<LoginPage />} />

            <Route path='/' element={<HomePage />} />
            <Route path='/page/viewingparticipation' element={<ViewingParticipationPage />} />
            <Route path='/page/display' element={<DisplayPage />} />
            <Route path='/page/education' element={<EducationPage/>} />
            <Route path='/page/collection' element={<CollectionPage/>} />
            <Route path='/page/artresearch' element={<ArtResearchPage />} />
            <Route path='/page/digitalartmuseum' element={<DigitalArtMuseumPage />} />
        </Routes>
    </>
    );
}

export default App;