import './App.css'
import Header from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import SubServices from './components/SubServices';
import VideoFooter from './components/VideoFooter';
import Footer from './components/Footer';
import PreServices from './components/PreServices';

function App() {

  return (
    <>
      <div className='header'>
        <Header />
      </div>
      <Home/>
      <div id='about' className="about">
        <About/>
      </div>
      <div className="service">
        <PreServices/>
      </div>
      <div  className='pb-4 pt-4 service-icon-background'>
        <Services/>
      </div>
      <div id='portfolio' className="portfolio">
        <h2 style={{textAlign:'center', color:'#395f74', paddingBottom:'5rem'}}>PORTFOLIO</h2>
        <SubServices/>
      </div>
      <div className="video" >
        <VideoFooter/>
      </div>
      <div className='contact'>
        <Footer/>
      </div>
      <div className="map">
          <h2 style={{ fontSize: "1.5rem", margin:'0', textAlign:'center' }}>MAP</h2>
      </div>
      <div className="copyright">
          <p style={{ fontSize: "0.8rem", margin:'0', textAlign:'center' }}>© Copyright 2023 . All Rights Reserved</p>
      </div>
    </>
  )
}

export default App
