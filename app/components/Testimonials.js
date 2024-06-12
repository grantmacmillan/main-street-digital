"use client";

import Image from "next/image";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import { Container } from "react-bootstrap";
import Slider from "react-slick";


const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            style={{ display: "block", fontSize: "2rem", left: "-25px", zIndex: 1, position: 'absolute', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
            onClick={onClick}
        >
            <FaChevronLeft aria-hidden="true" className="custom-prev-icon" />
        </div>
    );
};

const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            style={{ display: "block", fontSize: "2rem", right: "-25px", zIndex: 1, position: 'absolute', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
            onClick={onClick}
        >
            <FaChevronRight aria-hidden="true" className="custom-next-icon" />
        </div>
    );
};

export default function Testimonials() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

    return (
        <>
            <Container className="text-center my-5">
                <h1 className="section-heading">Testimonials</h1>
                <h4 className="section-subheading">See what my clients have to say</h4>
                <Slider {...settings} className="testimonial-carousel mt-5">
                    <div>
                        <div className="testimonial-item text-center">
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
                    </div>
                    <div>
                        <div className="testimonial-item text-center">
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
                    </div>
                    <div>
                        <div className="testimonial-item text-center">
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
                    </div>
                </Slider>
            </Container>
        </>
    );
}