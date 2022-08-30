import './App.css';
import TopNav from './components/topnav';
import 'materialize-css';
import Slider from './components/slider'
import TopBanner from './assets/kros-mini-disposable-ecig-4000-puff-device-1910.gif'
import FooterNav from './components/footerNav';
import Catagories from './components/catagories';


function App() {
  return (
<>
    <img id='banner' src={TopBanner} />
    <TopNav />
    {/* <Catagories /> */}
    <Slider />
    <FooterNav />
    </> 
  );
}


export default App;