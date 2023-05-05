import './App.css';
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"
import Home from "./components/Home.js"
import About from "./components/About.js"
import Sermons from "./components/Sermons.js"
import Events from "./components/Events.js"
import BibleStudy from "./components/Bible-Study.js"
import Kids from "./components/Kids.js"
import Give from "./components/Give.js"
import SupportEth from "./components/Support-Ethiopia.js"
import SupportReh from "./components/Support-Rehoboth.js"
import GiveNow from "./components/GiveNow.js"
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='rehoboth-church/' element=<Home/>/>
        <Route path='rehoboth-church/about' element=<About/>/>
        <Route path='rehoboth-church/sermons' element=<Sermons/>/>
        <Route path='rehoboth-church/events' element=<Events/>/>
        <Route path='rehoboth-church/ministries/bible-study' element=<BibleStudy/>/>
        <Route path='rehoboth-church/ministries/kids' element=<Kids/>/>
        <Route path='rehoboth-church/give' element=<Give/>/>
        <Route path='rehoboth-church/give/support-ethiopia' element=<SupportEth/>/>
        <Route path='rehoboth-church/give/support-rehoboth' element=<SupportReh/>/>
        <Route path='rehoboth-church/give/give-now' element=<GiveNow/>/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
