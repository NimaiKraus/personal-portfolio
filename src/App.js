import "./App.scss";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
