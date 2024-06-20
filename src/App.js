import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Features from './Components/Features/Features';
import Portfolio from './Components/Portfolio/Portfolio';

function App() {
  return (
    <>
   
    <Header/>
    <Home/>
    <Features/>  
    <Portfolio/>
      <About/>
      <Footer/>
      <Contact/>
      </>
  );
}

export default App;
