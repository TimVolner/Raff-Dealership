import React from 'react';
import { Link } from 'react-router-dom';
import Car from './car_lot.jpg'
import Paperwork from './doc_sign.png'
import Car_Galleryimg1 from './jeep1.jpg'
import Car_Galleryimg2 from './bmw1.jpg'
import Car_Galleryimg3 from './toyota.jpg'
import Car_Galleryimg4 from './truck1.jpg'
import Car_Galleryimg5 from './honda1.jpg'
import Car_Galleryimg6 from './audi2.jpg'
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: Car_Galleryimg1,
    thumbnail: Car_Galleryimg1,
  },
  {
    original: Car_Galleryimg2,
    thumbnail: Car_Galleryimg2,
  },
  {
    original: Car_Galleryimg3,
    thumbnail: Car_Galleryimg3
  },

  {
    original: Car_Galleryimg4,
    thumbnail: Car_Galleryimg4
  },

  {
    original: Car_Galleryimg5,
    thumbnail: Car_Galleryimg5

  },

  {
    original: Car_Galleryimg6,
    thumbnail: Car_Galleryimg6

  },
];
function Home() {
  return (


      <div className="home">
      <div className="intro-container">
      <div className="text-container">
        <h1>Welcome to</h1>
        <h2>Exclusive Auto Sales!</h2>
        </div>
      </div>

      <div className="spacer" />

      <div className="row_2">
       <div className="img-container">
        <img src ={Paperwork}className="doc_sign-img"/>
        <button className="custom-button">Click here!</button>
      </div>
    </div>

    <div className="spacer"/>

       <div className="row">
       <h3 className="main">Get your dream car today!</h3>
       <h4 className="sub">We are here to help you! </h4>
       <div className="img-gallery">
       <ImageGallery items={images} />
        </div>

      </div>

      <div className="spacer"/>
      </div>








  );
}

export default Home;
