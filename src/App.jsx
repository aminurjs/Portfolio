import About from "./Components/About";
import Banner from "./Components/Banner";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import "./app.css";

function App() {
  return (
    <>
      <section>
        <Navbar />
      </section>
      <section>
        <Banner />
      </section>
      <section>
        <Experience />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Skills />
      </section>
      <section>
        <Projects />
      </section>
      <section>
        <Contact />
      </section>
      <section>
        {" "}
        <Footer />
      </section>
    </>
  );
}

export default App;
