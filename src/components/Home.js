import React, { useEffect } from 'react';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/css/Home.css';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <Container className="mt-5">
      <Row className="intro-section" data-aos="fade-in">
        <Col className="text-center">
          <h1>Welcome to Springdale Public School</h1>
          <p>where we nurture young minds for a brighter future.</p>
        </Col>
      </Row>
      <Row className="carousel-section mt-4">
        <Col>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={`${process.env.PUBLIC_URL}/images/sports_day.png`}
                alt="Annual Sports Day"
              />
              <Carousel.Caption>
                <h3>Annual Sports Day</h3>
                <p>Celebrating Excellence in Sports</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={`${process.env.PUBLIC_URL}/images/science_exhibition.png`}
                alt="Science Exhibition"
              />
              <Carousel.Caption>
                <h3>Science Exhibition</h3>
                <p>Showcasing Student Innovations</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={`${process.env.PUBLIC_URL}/images/cultural_fest.png`}
                alt="Cultural Fest"
              />
              <Carousel.Caption>
                <h3>Cultural Fest</h3>
                <p>Embracing Diversity and Creativity</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Row className="about-us-section mt-5" data-aos="slide-in">
        <Col>
          <h2>About Us</h2>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>History</Card.Title>
              <Card.Text>
                Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Vision</Card.Title>
              <Card.Text>
                To create a learning environment that fosters academic excellence, critical thinking, and ethical values.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Mission</Card.Title>
              <Card.Text>
                To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Principal's Message</Card.Title>
              <Card.Text>
                At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="facilities-section mt-5" data-aos="fade-in">
        <Col>
          <h2>Infrastructure and Facilities</h2>
          <ul>
            <li>State-of-the-art science and computer labs</li>
            <li>Spacious and well-equipped classrooms</li>
            <li>Library with a vast collection of books and digital resources</li>
            <li>Sports facilities including a playground, gymnasium, and swimming pool</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
