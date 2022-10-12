import React from "react";
import "./HomeCarousel.css";
import Carousel from "react-bootstrap/Carousel";
import slide1 from "./images/Carousel/slide1.png";
import slide2 from "./images/Carousel/slide2.png";
import slide3 from "./images/Carousel/slide3.png";
import slide4 from "./images/Carousel/slide4.png";

function HomeCarousel() {
	return (
		<div className="carousel">
			<Carousel
				variant="dark"
				keyboard="true"
				touch="true"
				className="home_carouselActualSize"
			>
				<Carousel.Item interval={2000}>
					<img
						className="carouselImg"
						src={slide2}
						width={950}
						height={500}
						alt="carouselSlides"
					/>
				</Carousel.Item>

				<Carousel.Item interval={2000}>
					<img
						className="carouselImg"
						width={950}
						height={500}
						src={slide3}
						alt="carouselSlides"
					/>
				</Carousel.Item>

				<Carousel.Item interval={2000}>
					<img
						className="carouselImg"
						width={950}
						height={500}
						src={slide4}
						alt="carouselSlides"
					/>
				</Carousel.Item>

				<Carousel.Item interval={2000}>
					<img
						className="carouselImg"
						width={950}
						height={500}
						src={slide1}
						alt="carouselSlides"
					/>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}

export default HomeCarousel;
