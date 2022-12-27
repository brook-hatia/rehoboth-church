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
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element=<Home/>/>
        <Route path='/about' element=<About/>/>
        <Route path='/sermons' element=<Sermons/>/>
        <Route path='/events' element=<Events/>/>
        <Route path='/ministries/bible-study' element=<BibleStudy/>/>
        <Route path='/ministries/kids' element=<Kids/>/>
        <Route path='/give' element=<Give/>/>
        <Route path='/give/support-ethiopia' element=<SupportEth/>/>
        <Route path='/give/support-rehoboth' element=<SupportReh/>/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
