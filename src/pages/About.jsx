import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <Container fluid className="p-0 h-100">
      <Header />
      <Row>
        <Col className="mt-5 mx-3">
          <Card>
            <Card.Body className="p-5 fs-1 fw-bolder">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              ullam nesciunt commodi provident alias labore, consectetur
              officiis optio ipsam repellendus possimus ex delectus odit
              reiciendis voluptates. Neque architecto laboriosam veniam sed,
              ratione quasi est ipsum consequuntur magnam quas illo amet facilis
              adipisci assumenda quis voluptatum dolorum exercitationem optio,
              dicta rem!
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};

export default About;
