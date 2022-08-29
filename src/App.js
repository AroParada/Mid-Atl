import './App.css';
import TopNav from './components/topnav';
import 'materialize-css';
import Slider from 'react-materialize/lib/Slider';
import TopBanner from './assets/kros-mini-disposable-ecig-4000-puff-device-1910.gif'
import SideNav from 'react-materialize/lib/SideNav';
import FooterNav from './components/footerNav';
import Catagories from './components/catagories';
import { Row, Col, Container } from 'react-materialize';


function App() {
  return (
<>
    <img id='banner' src={TopBanner} />
    <TopNav />
    <Catagories />
    <Slider />
    <FooterNav />
    </> 
  );
}


export default App;
{/* <>
    <img id='banner' src={TopBanner} />
    <TopNav />
    <Catagories />
    <Slider />
    <SideNav />
    <FooterNav />
    </> */}