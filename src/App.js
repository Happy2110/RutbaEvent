import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Features from "./Components/Features/Features";
import Portfolio from "./Components/Portfolio/Portfolio";

function App() {
  return (
    <div className="w-screen px-1 ">
      <Header />
      <Home />
      <Features />
      <Portfolio />
      <About />
      <Footer />
      <Contact />
    </div>
  );
}

export default App;
