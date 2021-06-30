import "./App.css";
import Navbar from "./components/Navbar.js";
import HomePage from "./pages/Home.js";
import Portfolio from "./pages/Portfolio.js";
import Skills from "./pages/Skills";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./FontAwesomeIcons";

function App() {
  let content = (
    <div>
      <Router>
        <Navbar />

        <Route path="/" exact>
          <HomePage />
          <Portfolio />
        </Route>
        <Route path="/portfolio-website/skills" exact>
          <Skills />
        </Route>
      </Router>

      <Footer />
    </div>
  );
  return content;
}

export default App;
