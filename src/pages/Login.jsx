import React from "react";
import { Row, Col, Container, Card, Form, Button } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Login = () => {
  return (
    <Container fluid className="p-0 h-100">
      <Header />
      <Row className="mt-3">
        <Col className="mx-5">
          <Card>
            <Card.Title className="text-center mt-3">Log In</Card.Title>
            <Card.Body>
              <Form>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  className="mb-3"
                />
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  className="mb-3"
                />
                <Button varient="primary-outline" type="submit">
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};

export default Login;
