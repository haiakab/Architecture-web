import React, { Component, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './components/Pages/Home/Home';
import ContactUs from './components/Pages/ContactUs/ContactUs.js';
import AdaptiveHeader from './components/Pages/AboutUs/AboutUs';
import Gallery from './components/Pages/Gallery/Gallery';
import InteriorDesign from './components/Pages/Gallery/InteriorDesign';

function App() {

 
  return (
  <div className="App">
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/ContactUs" component={ContactUs} />
      {/* <Route path="/AboutUs" component={AdaptiveHeader} /> */}
      <Route path="/Gallery" component={Gallery} />
      <Route path="/InteriorDesign" component={InteriorDesign} />
    </Switch>
    </div>
  );
}

export default App;
