"use client";

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


const CustomFooter = () => {
    return (
        <footer className=" py-4 mt-auto">
            <br></br>
            <br></br>

            <br></br>

            <div className="container">
                <div className="row">
                    <div className="col-md-4 text-center">
                        <h5>Lamp Light</h5>
                    </div>
                    <div className="col-md-4 text-center">
                        <h5>Contact Information</h5>
                        <p>Email: grant.macmillan94@gmail.com</p>
                        <p>Phone: (647) 456-9232</p>
                        <p>Location: Stouffville, Ontario</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <h5>Follow Me</h5>
                        <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={30} className="icon-style" />
                        </a>
                        <a href="https://twitter.com" className="mx-3" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                            <FaTwitter size={30} className="icon-style" />
                        </a>
                        <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                            <FaFacebook size={30} className="icon-style" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default CustomFooter;