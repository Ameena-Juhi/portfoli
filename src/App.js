import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import GapBlack from "./components/GapBlack";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import GapGrey from "./components/GapGrey";

function App() {

  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <GapGrey/>
      <GapGrey/>
      <GapGrey/>
      <Experience />
      <GapBlack />
      <GapBlack/>
      <Contact />
      <GapGrey/>
      
      <SocialLinks />
    </div>
  );
}

export default App;
