import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { SubHeading } from '../../components';
import gallery01 from '../../assets/gallery01.png'
import gallery02 from '../../assets/gallery02.png'
import gallery03 from '../../assets/gallery03.png'
import gallery04 from '../../assets/gallery04.png'

import './Gallery.css';

const images = [gallery01, gallery02, gallery03, gallery04]

const Gallery = () => {
  const scrollRef = React.useRef(null)

  const scroll = (direction) => {
    const { current } = scrollRef

    if(direction === 'left') {
      current.scrollLeft -= 300
    } else {
      current.scrollLeft += 300
    }
  }

  return (
    <div className='app__gallery flex__center'>
      <div className="app__gallery-content">
        <SubHeading title='Instagram' />
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className='p__opensans' style={{color: 'var(--color-grey)'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button className='custom__button'>View More</button>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {images.map((image, index ) => (
            <div className='app__gallery-images_card flex__center' key={`gallery_image-${index+1}`}>
              <img src={image} alt='instagram post' draggable='false' />
              <BsInstagram className='gallery__image-icon'/>
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')} />
          <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  )
}

export default Gallery;
