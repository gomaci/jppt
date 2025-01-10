import { Global } from '@emotion/react';
import React from 'react';
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';
import {reset} from './styles/global';


function App(props) {
    return (
    <>
        <Global styles={reset}/>
        <Routes>
            <Route path='/' element={<HomePage />} />
        </Routes>
    </>
    );
}

export default App;