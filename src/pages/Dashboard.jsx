import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Dashboard = () => {
  return (
    <Container fluid className="h-100 p-0">
      <Header />
      <Row className="mt-5">
        <Col className="p-5 text-center text-uppercase">
          <Card>
            <Card.Body className="p-5">
              <Card.Title>Welcome, user.name</Card.Title>
              <Button variant="outline-danger" className="mt-5">
                Log out
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};

export default Dashboard;
