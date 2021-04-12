import React, { Component } from 'react'
import InteriorDesignGaller from '../../../Json/InteriorDesign';
import Materials from '../../General/Materials/Materials';
import {Canvas , useFrame} from 'react-three-fiber'
// import Simulate from './Simulate';
import './Proj.css'

export default class Proj extends Component { 
    
    render() {
         const photo = InteriorDesignGaller[2].imageUrl;
        return (
            
             <div class="card-bg  text-white border-0 Proj-bg "> 
            <img src={photo} class=" Proj-bg" alt="Responsive image"></img> 
             <div class="card-img-overlay materials d-flex flex-column justify-content-start ">
             <Materials /> 
             </div> 
             {/* <Simulate/> */}
             {/* {Simulate} */}
            
          
             </div> 
           
            // {/* <Simulate/> */}
            //  {/* <Simulate/> */}
           
        )
    }
}
