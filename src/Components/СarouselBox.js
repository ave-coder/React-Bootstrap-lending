import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import img from '../accets/1.jpeg';
import img2 from '../accets/2.jpg';
import img3 from '../accets/3.jpg';

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item >
                    <img
                        className="d-block w-100"
                        src={img}
                        alt="room"
                    />
                    <Carousel.Caption>
                        <h3>Design room</h3>
                        <p>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="room"
                    />
                    <Carousel.Caption>
                        <h3>Design room</h3>
                        <p>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="room"
                    />
                    <Carousel.Caption>
                        <h3>Design room</h3>
                        <p>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );

    }
}