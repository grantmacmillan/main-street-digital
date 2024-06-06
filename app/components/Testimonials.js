"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
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
                    className="testimonial-carousel mt-5"
                >
                    <Carousel.Item>
                        <div className="text-center">
                            <Image
                                src="/images/landing.jpg"
                                alt="John Smith"
                                width={100}
                                height={100}
                                className="rounded-circle mb-3"
                            />
                            <div className="mb-2">
                                {[...Array(5)].map((_, i) => <FaStar key={i} className="testimonial-star" />)}
                            </div>
                            <h5>John Smith</h5>
                            <blockquote className="testimonial-blockquote">
                                <p className="mb-4">
                                    fhgsk jhfshdjfh skdjhf jksdh fjksdhf kjshdf kjshdf kjsdhf jhsdf hsdhf jsdhf jsdhf shf hs fhdsf hsdfj shdfjsdhf shkjfh jkh.
                                </p>
                            </blockquote>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="text-center">
                            <Image
                                src="/images/landing.jpg"
                                alt="John Smith"
                                width={100}
                                height={100}
                                className="rounded-circle mb-3"
                            />
                            <div className="mb-2">
                                {[...Array(5)].map((_, i) => <FaStar key={i} className="testimonial-star" />)}
                            </div>
                            <h5>John Smith</h5>
                            <blockquote className="testimonial-blockquote">
                                <p className="mb-4">
                                    fhgsk jhfshdjfh skdjhf jksdh fjksdhf kjshdf kjshdf kjsdhf jhsdf hsdhf jsdhf jsdhf shf hs fhdsf hsdfj shdfjsdhf shkjfh jkh.
                                </p>
                            </blockquote>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="text-center">
                            <Image
                                src="/images/landing.jpg"
                                alt="John Smith"
                                width={100}
                                height={100}
                                className="rounded-circle mb-3"
                            />
                            <div className="mb-2">
                                {[...Array(5)].map((_, i) => <FaStar key={i} className="testimonial-star" />)}
                            </div>
                            <h5>John Smith</h5>
                            <blockquote className="testimonial-blockquote">
                                <p className="mb-4">
                                    fhgsk jhfshdjfh skdjhf jksdh fjksdhf kjshdf kjshdf kjsdhf jhsdf hsdhf jsdhf jsdhf shf hs fhdsf hsdfj shdfjsdhf shkjfh jkh.
                                </p>
                            </blockquote>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </>
    );
}