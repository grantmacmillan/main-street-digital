
import Image from "next/image";
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaQuoteRight, FaChartLine, FaLaptopCode, FaMobileAlt, FaPencilRuler, FaPencilAlt, FaCode } from 'react-icons/fa';

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
                <span className="highlight">Web Presences,</span> Streamlined and Simplified
              </h1>
              <p>
                We're here for <span className="highlight">you and your business.</span> Whether you're generating leads, building your brand, or just expanding your personal network, Lamplight illuminates your options. Our team will customise a product that suits you.
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
          <Row className="services-row text-content w-100 mt-4">

            <Col md={4} className="d-flex flex-column align-items-center text-center position-relative mb-4">
              <FaPencilRuler size={40} className="icon-style" />
              <h3>Eye-catching Design</h3>
              <p>From image galleries to portfolios, sales inventories to restaurant menus, we will design a <span className="highlight">stunning user experience</span> to light up your business and catch the eyes of customers on all platforms.</p>
              <div className="divider"></div>
            </Col>
            <Col md={4} className="d-flex flex-column align-items-center text-center mb-4">
              <FaCode size={40} className="icon-style" />
              <h3>Development and Hosting</h3>
              <p>After we design the site of your dreams together, <span className="highlight">leave the hard work to us.</span> We will run your website for you, make changes whenever you need, and guarantee 24/7 uptime.</p>
              <div className="divider"></div>
            </Col>
            <Col md={4} className="d-flex flex-column align-items-center text-center position-relative mb-4">
              <FaPencilAlt size={40} className="icon-style" />
              <h3>SEO & Content Writing</h3>
              <p>Funnel your clients into your site with our copywriting solutions. <span className="highlight">No AI, just great content.</span> Get your business at the top of search results and secure impressions with quality content writing and blog services.</p>
            </Col>
          </Row>
          <Link href="/pricing">
                <span className="btn-flip" data-back="Our Services" data-front="How can we help?"></span>
          </Link>
        </Container>
      </div>
      <Testimonials />
    </>
  );
}