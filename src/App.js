import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Services from "./components/Services/Services"
import Footer from "./components/Footer";
import FlowersExport from "./components/Services/FlowersExport"
import FruitExport from "./components/Services/FruitExport"
import DatesImport from "./components/Services/DatesImport"
import About_home from "./components/Home/About.home"
<<<<<<< HEAD
import Solutions_home from "./components/Services/Services"
import Landing from "./components/Home/Landing"

=======
import Solutions_home from "./components/Services/services"
>>>>>>> 4af133ce73eeaa9cf97271dad11e166434a12705

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
<<<<<<< HEAD
          <Route path="/services" component={Services} />
          <Route path="/flowersexport" component={FlowersExport} />
          <Route path="/fruitExport" component={FruitExport} />
          <Route path="/DatesImport" component={DatesImport} />
          <Route path="/about.home" component={About_home} />
          <Route path="/services" component={Solutions_home} />
          <Route path="/landing" component={Landing} />

=======
          <Route path="/services" component={Services}/>
          <Route path="/flowersexport" component={FlowersExport}/>
          <Route path="/fruitexport" component={FruitExport}/>
          <Route path="/datesimport" component={DatesImport}/>
          <Route path="/about.home" component={About_home}/>
          <Route path="/services" component={Solutions_home}/>
          
>>>>>>> 4af133ce73eeaa9cf97271dad11e166434a12705

        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
