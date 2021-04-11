import React, { Component } from 'react'
import InteriorDesignGaller from '../../../Json/InteriorDesign';
import Materials from '../../General/Materials/Materials';
import './Proj.css'

export default class Proj extends Component { 
    
    render() {
        const photo = InteriorDesignGaller[2].imageUrl;
        return (
            <div class="card-bg container card text-white border-0">
            <img src={photo} class=" Proj-bg" alt="Responsive image"></img>
            <div class="card-img-overlay materials d-flex flex-column justify-content-end ">
            <Materials /> 
            </div>
           
            </div>
            
            
        )
    }
}
