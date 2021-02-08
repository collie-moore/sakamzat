import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Services from "./components/Services/services"
import Footer from "./components/Footer";
import FlowersExport from "./components/Services/FlowersExport"
import FruitExport from "./components/Services/FruitExport"
import DatesImport from "./components/Services/DatesImport"

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/services" component={Services}/>
          <Route path="/flowersexport" component={FlowersExport}/>
          <Route path="/fruitexport" component={FruitExport}/>
          <Route path="/datesimport" component={DatesImport}/>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
