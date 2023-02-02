import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { useInView } from 'react-intersection-observer';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  const [ref, inView] = useInView();

  return (
    <div className="app__gallery flex__center" id='gallery'>
      <div className="app__gallery-content" ref={ref}>
        <SubHeading title="Instagram" />
        <h1 className={"headtext__cormorant " + (inView? "sltr": "")} style={{opacity: '0'}}>Photo Gallery</h1>
        <p className={"p__opensans " + (inView? "sltr": "")} style={{ color: '#AAAAAA', marginTop: '2rem', animationDelay: '0.5s', opacity: '0'}}> Experience the thrill and excitement of our sports fest through our stunning Photo Gallery. The Action Shots...</p>
        <button type="button" className="custom__button"><a href="https://www.instagram.com/urja.tiet/">View More</a></button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {[ images.gallery08, images.gallery01, images.gallery02, images.gallery03, images.gallery04 , images.gallery05 , images.gallery06 , images.gallery07 , images.gallery09 , images.gallery10 , images.gallery11 , images.gallery12 , images.gallery13 , images.gallery14 , images.gallery15].map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_image" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;