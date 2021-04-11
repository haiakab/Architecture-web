import React from 'react';
import ReactDOM from 'react-dom';
import './Materials.css'

class Materials extends React.Component {
  render(){
    return(
       <div class="material_box">
        <div id="plate" class=" border-top border-bottom pt-3 pb-3">
        <img class="rounded-circle img-circular mt-2 mr-2" alt="100x100" src="img/InteriorDesign_Gallery/Formayka_4049.jpg" data-holder-rendered="true"/>
        <img class="rounded-circle img-circular mr-2" alt="100x100" src="/img/InteriorDesign_Gallery/Formayka_2047_tp.jpg" data-holder-rendered="true"/>
        <img class="rounded-circle img-circular  mr-2" alt="100x100" src="img/InteriorDesign_Gallery/5111_full_slab.jpg" data-holder-rendered="true"/>
          <img class="rounded-circle img-circular  mr-2" alt="100x100" src="img/InteriorDesign_Gallery/green1.jpg" data-holder-rendered="true"/>
          <img class="rounded-circle img-circular  mr-2" alt="100x100" src="img/InteriorDesign_Gallery/NGY_80.png" data-holder-rendered="true"/>
        </div>
      
      </div>
      )
  }
}

export default Materials;
