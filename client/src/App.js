import "./App.css";
import Home from "./PortfolioContainer/Home/Home";
import Navbar from "./PortfolioContainer/Home/Navbar/Navbar";
import AboutMe from "./PortfolioContainer/AboutMe/AboutMe";
import Resume from "./PortfolioContainer/Resume/Resume";
import Testimonial from "./PortfolioContainer/Testimonial/testimonial";
import ContactMe from "./PortfolioContainer/ContactMe/ContactMe";
import MainFooter from "./PortfolioContainer/MainFooter/Main-Footer"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      <AboutMe />
      <Resume />
      <Testimonial />
      <ContactMe />
      <MainFooter/>
     </div>
  );
}

export default App;
