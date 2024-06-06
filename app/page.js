
import Image from "next/image";
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaQuoteRight } from 'react-icons/fa';

import { Container, Row, Col } from 'react-bootstrap';

import Testimonials from './components/Testimonials';



export default function Home() {

  return (
    <>
      <div className="landing">
        <Container className="h-100 d-flex flex-column align-items-center justify-content-center">
          <Row className="w-100">
            <Col md={6} className="text-content">
              <h1>
                Transform Your <span className="highlight">Health</span>
              </h1>
              <p>
                Achieve your <span className="highlight">fitness goals</span> with personalized training and expert support. Join us today for a healthier, stronger you.
              </p>

              <Link href="/contact">
                <span className="btn-flip" data-back="Contact Me" data-front="Get Started"></span>
              </Link>
            </Col>
            <Col md={6} className="image-container d-flex justify-content-center align-items-center">
              <div className="masked-image">
                <Image
                  src="/images/landing.jpg" // Replace with the actual path to the client's image
                  alt="Client Image"
                  width={400}
                  height={400}
                  className="clientImage img-fluid"
                />
              </div>
            </Col>
          </Row>
          <Row className="social-media-row w-100 mt-4">
            <Col className="d-flex justify-content-center">
              <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={40} className="icon-style" />
              </a>
              <a href="https://twitter.com" className="mx-3" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={40} className="icon-style" />
              </a>
              <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={40} className="icon-style" />
              </a>
            </Col>
          </Row>
        </Container>
      </div>
      <Testimonials />
    </>
  );
}