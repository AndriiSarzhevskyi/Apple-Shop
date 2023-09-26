import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const ImgSlider = ({ photos }) => {
  return (
    <Carousel showArrows={true} showThumbs={false}>
      {photos.map((photo, index) => (
        <div key={index}>
          <img src={photo.filePath} alt={`Photo ${index + 1}`} />
        </div>
      ))}
    </Carousel>
  );
};
