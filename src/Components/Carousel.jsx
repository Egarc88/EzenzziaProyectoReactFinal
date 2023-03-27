import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import cover from '../imgs/cover.jpg';
import perfume from '../imgs/sonyCover.png';
import Dama from '../imgs/xboxCover.webp';
import kids from '../imgs/nintendoCover.jpg';
const CarouselComponent = () => {
  return (
    <Carousel className='carousel'>
      <Carousel.Item>
        <img
          className="d-block w-100 carrousel-img"
          src={cover}
          alt="First slide"
        />
        <Carousel.Caption className='carrousel-text'>
          <h3><strong>Esenzzia</strong></h3>
          <p>¡Disfrútate más con Perfumerías Ezencia</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carrousel-img"
          src={perfume}
          alt="Second slide"
        />
        <Carousel.Caption className='carrousel-text'>
          <h3><strong>Hombres</strong></h3>
          <p>No lo lamentes adquiere tu Fragancias</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carrousel-img"
          src={Dama}
          alt="Third slide"
        />
        <Carousel.Caption className='carrousel-text'>
          <h3><strong>Dama</strong></h3>
          <p>
            La mejor esencias para ti !
          </p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100 carrousel-img"
          src={kids}
          alt="First slide"
        />
        <Carousel.Caption className='carrousel-text'>
          <h3><strong>Esenzzia</strong></h3>
          <p>Aromas para todos </p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  )
}

export default CarouselComponent