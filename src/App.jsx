import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Project from "./components/Project";

function App() {
  return (
    <main>
      <Header />
      {/* <MobileNav /> */}
      <Hero />
      <Project />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
