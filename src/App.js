import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

function App()
{
  return (
    <>
      <Router>
        <NavBar />
        {/* Padding form the navbar */}
        <div style={{height: "17vh",}}></div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/contact-us" component={ContactUs} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
