// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import Carousel from 'react-bootstrap/Carousel';
import React from 'react'
import { Button, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import Title from '../components/Title';
import pic1 from '../images/slide-1.jpg';
import pic2 from '../images/slide-2.jpg';
import pic3 from '../images/slide-3.jpg';

const HomePage = () => {
  
  return (
    <>
		<Title />
    <Carousel data-bs-theme="dark">
      <Carousel.Item interval={1000}>
        <img className="d-block w-100 swiper-slide carousel-item-a intro-item bg-image" src={pic1} alt="First slide" />
        <Carousel.Caption>
          <h5 className="color-b">First slide label</h5>
          <p className="intro-title mb-4 text-light">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100 swiper-slide carousel-item-a intro-item bg-image" src={pic2} alt="Second slide" />
        <Carousel.Caption>
          <h5 className="color-b">Second slide label</h5>
          <p className="intro-title mb-4 text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100 swiper-slide carousel-item-a intro-item bg-image" src={pic3} alt="Third slide" />
        <Carousel.Caption>
          <h5 className="color-b">Third slide label</h5>
          <p className="intro-title mb-4 text-light">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
			{/* <div className="intro intro-carousel swiper ">
    <div className="swiper-wrapper">
      <div
        className="swiper-slide carousel-item-a intro-item bg-image"
        style={{ backgroundImage: `url(${pic1})`}}
      >
        <div className="overlay overlay-a" />
        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="intro-body">
                    <p className="intro-title-top">
                      Doral, Florida
                      <br /> 78345
                    </p>
                    <h1 className="intro-title mb-4 ">
                      <span className="color-b">204 </span> Mount
                      <br /> Olive Road Two
                    </h1>
                    <p className="intro-subtitle intro-price">
                      <a href="#!">
                        <span className="price-a">rent | $ 12.000</span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="swiper-slide carousel-item-a intro-item bg-image"
        style={{ backgroundImage: `url(${pic2})`}}
      >
        <div className="overlay overlay-a" />
        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="intro-body">
                    <p className="intro-title-top">
                      Doral, Florida
                      <br /> 78345
                    </p>
                    <h1 className="intro-title mb-4">
                      <span className="color-b">204 </span> Rino
                      <br /> Venda Road Five
                    </h1>
                    <p className="intro-subtitle intro-price">
                      <a href="#1">
                        <span className="price-a">rent | $ 12.000</span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="swiper-slide carousel-item-a intro-item bg-image"
        style={{ backgroundImage: `url(${pic3})`}}
      >
        <div className="overlay overlay-a" />
        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="intro-body">
                    <p className="intro-title-top">
                      Doral, Florida
                      <br /> 78345
                    </p>
                    <h1 className="intro-title mb-4">
                      <span className="color-b">204 </span> Alira
                      <br /> Roan Road One
                    </h1>
                    <p className="intro-subtitle intro-price">
                      <a href="#1">
                        <span className="price-a">rent | $ 12.000</span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="swiper-pagination" />
  </div> */}
 
    </>
  )
}

export default HomePage