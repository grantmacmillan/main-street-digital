"use client";
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

const ProjectCarousel = ({ projects }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, // Standard autoplay speed
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="portfolio-carousel-container">
            <Slider {...settings}>
                {projects.map((project, index) => (
                    <div key={index} className="portfolio-carousel-item">
                        <div className="portfolio-image-container">
                            <Image
                                src={project.image}
                                alt={project.name}
                                layout="fill"
                                objectFit="cover"
                                className="portfolio-carousel-image"
                                sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                quality={100}
                            />
                        </div>
                        <h5 className="portfolio-project-name">{project.name}</h5>
                        <p className="portfolio-project-date">{project.date}</p>
                    </div>
                ))}
            </Slider>

        </div>
    );
};

export default ProjectCarousel;