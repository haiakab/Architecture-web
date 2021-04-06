import React , { Component, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
// import "../Parts/Content/RightContent.js";
// import "../Parts/Content/RightContent.css";
// import "../Parts/Content/LeftContent.js";
// import "../Parts/Content/LeftContent.css";
// import Header from  "../../Parts/Header/Header.js";
//  import "../../Parts/Header/Header.css";

 import Header from '../../Parts/Header/Header'
 import Content from '../../Parts/Content/Content'
 import Footer from '../../Parts/Footer/Footer'
//  import RightHeader from '../../Parts/Header/RightHeader'
 import './Home.css'
// import "../Parts/Footer/Footer.js";
// import "../Parts/Footer/Footer.css";

class Home extends React.Component{

  render()
  {
    return (
    <>
    {/* <TodoList /> */}
    <div className="container mainBody">
    <Header styleName="header1" itemName="txtHeaderColor"/>
    <Content/>
    <Footer/>
    </div>
    </> 
    );

  }
}
 export default Home;
