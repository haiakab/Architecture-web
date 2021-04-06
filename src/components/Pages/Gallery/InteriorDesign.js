import React from "react";
import Masony from "react-masonry-component";
import InteriorDesignGaller from '../../../Json/InteriorDesign'
import "./InteriorDesign.css";

// Dome dummy content
// const PHOTOS = [
//     {InteriorDesign}
// ];

// Masory Options
const masonryOptions = {
  fitWidth: true,
  columnWidth: 450,
  gutter: 30,
  itemSelector: ".photo-item",
};

const InteriorDesign = () => {
  return (
    <div>
      <Masony
        className={"photo-list"}
        elementType={"ul"}
        options={masonryOptions}
        disableImagesLoaded={false}
        updateOnEachImageLoad={false}
      >
        {InteriorDesignGaller.map((photo) => (
          <li className={`photo-item container`} >
            <img src={photo.imageUrl} alt="" />
            <div class="card-img-overlay "  >
            <div class="overlay text-center hovereffect">
              <h2 class="mt-auto"><div class="text-light">{photo.name} </div></h2>
            </div>
            {/* <!-- <p class="card-text">Some example text.</p>
            <a href="#" class="btn btn-primary">See Profile</a>  --> */}
          </div>
          </li>
        ))}
      </Masony>
    </div>
  );
};

export default InteriorDesign;