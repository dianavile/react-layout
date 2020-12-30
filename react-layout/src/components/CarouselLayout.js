import React from 'react';
import {Carousel} from 'react-bootstrap';

const CarouselLayout = () => {
    return (
        <>    
        <h2 style={{display: "flex", justifyContent: "center", margin: "auto"}}>Slider</h2>
        <Carousel style={{display: "inline-flex", margin: "auto", justifyContent: "center", alignItems: "center"}}>
            <Carousel.Item interval={1000}>
                <img
                className="card-img"
                src="https://picsum.photos/100/100"
                alt="First slide"
                />   
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                className="card-img"
                src="https://picsum.photos/100/100"
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                className="card-img"
                src="https://picsum.photos/100/100"
                alt="Third slide"
                />  
            </Carousel.Item>
        </Carousel>
        </>
    );
}

export default CarouselLayout;