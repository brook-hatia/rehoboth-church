import './App.css';
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"
import Home from "./components/Home.js"
import About from "./components/About.js"
import Events from "./components/Events.js"
import BibleStudy from "./components/Bible-Study.js"
import Give from "./components/Give.js"
import SupportEth from "./components/Support-Ethiopia.js"
import SupportReh from "./components/Support-Rehoboth.js"

function App() {
  return (
    <div>
      <Header/>
      <BibleStudy/>
      <Footer/>
    </div>
  );
}

export default App;
