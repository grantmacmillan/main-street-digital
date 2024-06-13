import React from 'react';
import { FaMedal, FaStar, FaTrophy, FaCheck, FaArrowRight } from 'react-icons/fa';

import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import Image from 'next/image';
import Link from 'next/link';
import profilePic from "../../public/images/landing.jpg";

export default function Pricing() {
    return (
        <div className="container pricing-container my-5 text-center">
            <h1 className="section-heading">Pricing</h1>
            <h4 className="section-subheading">Find the package thats right for you!</h4>
            <p>All prices in CAD.</p>
            <div className="row">
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className="pricing-card text-start d-flex flex-column justify-content-between delay-1">
                        <div className="pricing-card-body">
                            <p className="pricing-card-title-small">PERSONAL</p>
                            <p className="pricing-card-title">$500</p>
                            <div className='container-divider'></div>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li><FaCheck /> Vexillologist pitchfork</li>
                                <li><FaCheck /> Tumeric plaid portland</li>
                                <li><FaCheck /> Mixtape chillwave tumeric</li>
                            </ul>
                        </div>
                        <div className="pricing-card-footer">
                            <div className="footer-text text-start">
                                A site all about you. Great for artists, blogs, and personal resumes.
                            </div>
                            <Link href="/contact" passHref className='no-underline'>
                                <div className="cssbuttonsIoButton mt-2">
                                    Book a Call
                                    <div className="arrow-icon">
                                        <FaArrowRight />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className="pricing-card text-start d-flex flex-column justify-content-between delay-2">
                        <div className="pricing-card-body">
                            <p className="pricing-card-title-small">PRO</p>
                            <h2 className="pricing-card-title">$38/mo</h2>
                            <div className='container-divider'></div>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li><FaCheck /> Vexillologist pitchfork</li>
                                <li><FaCheck /> Tumeric plaid portland</li>
                                <li><FaCheck /> Hexagon neutra unicorn</li>
                                <li><FaCheck /> Tumeric plaid portland</li>
                                <li><FaCheck /> Mixtape chillwave tumeric</li>
                            </ul>
                        </div>
                        <div className="pricing-card-footer">
                            <div className="footer-text text-start">
                                Recommended for businesses with more than 10 employees.
                            </div>
                            <Link href="/contact" passHref className='no-underline'>
                                <div className="cssbuttonsIoButton mt-2">
                                    Book a Call
                                    <div className="arrow-icon">
                                        <FaArrowRight />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className="pricing-card text-start d-flex flex-column justify-content-between delay-3">
                        <div className="pricing-card-body">
                            <p className="pricing-card-title-small">ENTERPRISE</p>
                            <h2 className="pricing-card-title">$72/mo</h2>
                            <div className='container-divider'></div>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li><FaCheck /> Vexillologist pitchfork</li>
                                <li><FaCheck /> Tumeric plaid portland</li>
                                <li><FaCheck /> Mixtape chillwave tumeric</li>
                            </ul>
                        </div>
                        <div className="pricing-card-footer">
                            <div className="footer-text text-start">
                                Recommended for businesses with more than 10 employees.
                            </div>
                            <Link href="/contact" passHref className='no-underline'>
                                <div className="cssbuttonsIoButton mt-2">
                                    Book a Call
                                    <div className="arrow-icon">
                                        <FaArrowRight />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}