
import Image from "next/image";
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaQuoteRight, FaChartLine, FaLaptopCode, FaMobileAlt } from 'react-icons/fa';

import { Container, Row, Col } from 'react-bootstrap';

import Testimonials from './components/Testimonials';



export default function Home() {
  return (
    <>
      <div className="landing">
        <Container className="d-flex flex-column align-items-center justify-content-center">
          <Row className="w-100 align-items-center flex-grow-1">
            <Col md={6} className="text-content mb-4">
              <h1>
                <span className="highlight">Boost</span> Your Online Presence
              </h1>
              <p>
                We craft beautiful, effective websites for <span className="highlight">small businesses,</span> helping you connect with customers and grow your brand. Let’s make your digital vision a reality.
              </p>
              <Link href="/contact">
                <span className="btn-flip" data-back="Contact Us" data-front="Get Started"></span>
              </Link>
            </Col>
            <Col md={6} className="image-container d-flex justify-content-center align-items-center mb-4">
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
          <Row className="services-row w-100 mt-4">

            <Col md={4} className="d-flex flex-column align-items-center text-center position-relative mb-4">
              <FaChartLine size={40} className="icon-style" />
              <h3>SEO Optimization</h3>
              <p>Improve your search engine ranking and get discovered by more potential customers.</p>
              <Link href="/pricing">Learn More</Link>
              <div className="divider"></div>
            </Col>
            <Col md={4} className="d-flex flex-column align-items-center text-center position-relative mb-4">
              <FaLaptopCode size={40} className="icon-style" />
              <h3>Web Development</h3>
              <p>We build responsive, high-quality websites tailored to your business needs.</p>
              <Link href="/pricing">Learn More</Link>
              <div className="divider"></div>
            </Col>
            <Col md={4} className="d-flex flex-column align-items-center text-center mb-4">
              <FaMobileAlt size={40} className="icon-style" />
              <h3>Mobile Optimization</h3>
              <p>Ensure your website looks great and works perfectly on all devices.</p>
              <Link href="/pricing">Learn More</Link>
            </Col>
          </Row>
        </Container>
      </div>
      <Testimonials />
    </>
  );
}