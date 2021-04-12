import React, { Component } from 'react'
import InteriorDesignGaller from '../../../Json/InteriorDesign';
import Materials from '../../General/Materials/Materials';
import HomeSim from './HomeSim';
import InfoArea from '../../General/InfoArea/InfoArea';
import './Proj.css'

export default class Proj extends Component {     
    render() {
        const projDetails= InteriorDesignGaller[2].detailedImages.map((jsonItem) =>
        <InfoArea item={jsonItem}/>
    );
         const photo = InteriorDesignGaller[2].imageUrl;
        return (
            <div>
                <div class="card-bg  text-white border-0 Proj-bg "> 
                    <img src={photo} class=" Proj-bg" alt="Responsive image"></img> 
                    <div class="card-img-overlay materials  ">
                    <Materials />    
                    </div> 
                </div> 
                <HomeSim className="container-fluid m-0 " />
                {projDetails}
                {/* <InfoArea item={InteriorDesignGaller[2].detailedImages[1]}/> */}
             </div>
        )
    }
}
