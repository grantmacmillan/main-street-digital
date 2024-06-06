"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Container, Row, Col, Carousel } from "react-bootstrap";

export default function Testimonials() {
    return (
        <>
            <Container className="text-center my-5">
                <h1 className="section-heading">Testimonials</h1>
                <h4 className="section-subheading">See what my clients have to say</h4>
                <Carousel
                    prevIcon={<FaChevronLeft className="custom-prev-icon" aria-hidden="true" />}
                    nextIcon={<FaChevronRight className="custom-next-icon" aria-hidden="true" />}
                >
                    <Carousel.Item>
                        <blockquote className="blockquote text-center">
                            <p className="mb-4">
                                "This is the best training program I have ever joined. The support and motivation are incredible!"
                            </p>
                            <footer className="blockquote-footer">John Doe</footer>
                        </blockquote>
                    </Carousel.Item>
                    <Carousel.Item>
                        <blockquote className="blockquote text-center">
                            <p className="mb-4">
                                "I achieved my fitness goals faster than I thought possible, thanks to the expert guidance."
                            </p>
                            <footer className="blockquote-footer">Jane Smith</footer>
                        </blockquote>
                    </Carousel.Item>
                    <Carousel.Item>
                        <blockquote className="blockquote text-center">
                            <p className="mb-4">
                                "Highly recommend to anyone serious about their health and fitness."
                            </p>
                            <footer className="blockquote-footer">Emily Johnson</footer>
                        </blockquote>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </>
    );
}