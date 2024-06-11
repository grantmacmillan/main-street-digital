// components/ProjectCarousel.js
"use client";
import React from 'react';
import { Carousel } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

import Image from 'next/image';

const ProjectCarousel = ({ projects }) => {
    return (
        <Carousel prevIcon={<FaChevronLeft className="custom-prev-icon" aria-hidden="true" />}
            nextIcon={<FaChevronRight className="custom-next-icon" aria-hidden="true" />}>
            {projects.map((project, index) => (
                <Carousel.Item key={index}>
                    <div className="carousel-content">
                        <div className="portfolio-image-container">
                            <Image
                                src={project.image}
                                alt={project.name}
                                width={800}
                                height={450}
                                className="d-block w-100"
                            />
                        </div>
                        <div className="custom-caption">
                            <h3>{project.name}</h3>
                            <p>{project.date}</p>
                        </div>
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default ProjectCarousel;