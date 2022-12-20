import './App.css';
import Header from "./components/Header.js"
import Home from "./components/Home.js"
import Footer from "./components/Footer.js"

/* test import components */
import About from "./components/About.js"

function App() {
  return (
    <div>
      <Header/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
