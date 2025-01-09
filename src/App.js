import './App.css';
import {Route, Link} from 'react-router-dom'
import Main from './Main';
import ArtResearch from './subComponent/ArtResearch';
import Collection from './subComponent/Collection';
import DigitalArtMuseum from './subComponent/DigitalArtMuseum';
import Display from './subComponent/Display';
import Education from './subComponent/Education';
import ViewingParticipation from './subComponent/ViewingParticipation';

function App() {
  return (
    <div className='body'>
    <header>
        <div className='inbody'>

          <p>MMCA 회원가입</p>
          <p>로그인</p>
          <p>검색아이콘</p>
          <select>KO:한국어</select>

        </div>
    </header>
    <main>

      <div className= 'mainBox'>

        <div className='logoBox'>
          <h1><Link to="/">LOGO</Link></h1>
        </div>
       
        <nav className='navBox'>
          <ul>
            <li><Link to="/subComponent/ArtResearch">관람.참여</Link></li>
            <li><Link to="/subComponent/Collection">전시</Link></li>
            <li><Link to="/subComponent/DigitalArtMuseum">교육</Link></li>
            <li><Link to="/subComponent/Display">소장품</Link></li>
            <li><Link to="/subComponent/Education">미술연구</Link></li>
            <li><Link to="/subComponent/ViewingParticipation">디지털미술관</Link></li>
          </ul>
        </nav>

        <div>IMAGE</div>

        <div className='titleBox'>
          <p>SeMA 옴니버스 아카이브 환상</p>
        </div>
        
        <div className='line'></div>

      </div>
     
    </main>

    <div>
      <Route path="/" component={Main}/>
      <Route path="/subComponent/ArtResearch" component={ArtResearch}/>
      <Route path="/subComponent/Collection" component={Collection}/>
      <Route path="/subComponent/DigitalArtMuseum" component={DigitalArtMuseum}/>
      <Route path="/subComponent/Display" component={Display}/>
      <Route path="/subComponent/Education" component={Education}/>
      <Route path="/subComponent/ViewingParticipation" component={ViewingParticipation}/>
    </div>






    </div>
  );
}

export default App;
