import React from 'react';
import ReactDOM from 'react-dom';
import Masony from "react-masonry-component";
import InteriorDesignGaller from '../../../Json/InteriorDesign';
import ArchetictGallery from '../../../Json/Archetict';
import "./Portfolio.css";

 class Portfolio extends React.Component {
  constructor(props){
    super(props);
  } 
  render(){
      const masonryOptions = {
        fitWidth: true,
        columnWidth: 450,
        gutter: 30,
        itemSelector: ".photo-item",
      }
      if(this.props.galleryType == "interior")
      var photos=InteriorDesignGaller;
      else if (this.props.galleryType == "archetict")
      var photos=ArchetictGallery;
      else if (this.props.galleryType == "Kitchens")
      var photos=ArchetictGallery;

    return (    
      <div>
        <Masony
          className={"photo-list"}
          elementType={"ul"}
          options={masonryOptions}
          disableImagesLoaded={false}
          updateOnEachImageLoad={false}
        >
          {photos.map((photo) => (
            <li className={`photo-item container hovereffect2`} >
              <img src={photo.imageUrl} alt="" />
              <div class="card-img-overlay">
              <div class="overlay2 text-center hovereffect2">
                <h2 class="mt-auto"><div >{photo.name}</div></h2>
              </div>
              {/* <!-- <p class="card-text">Some example text.</p>
              <a href="#" class="btn btn-primary">See Profile</a>  --> */}
            </div>
            </li>
          ))}
        </Masony>
      </div>
    );  
  }
}


export default Portfolio;
