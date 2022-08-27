import './App.css';
import TopNav from './components/topnav';
import 'materialize-css';
import Slider from 'react-materialize/lib/Slider';
import TopBanner from './assets/kros-mini-disposable-ecig-4000-puff-device-1910.gif'
import SearchBar from './components/search';

function App() {
  return (
    <>
    <img id='banner' src={TopBanner} />
    <TopNav />
    {/* <Slider /> */}
    </>
  );
}

export default App;
