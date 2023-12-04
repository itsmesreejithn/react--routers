import React from "react";
import { Row, Col, Container, Card, Form, Button } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Login = ({ authenticate, userData }) => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    if (email === userData.email && password === userData.password) {
      authenticate();
      navigate("/");
    } else {
      alert("Invalid credentials");
      navigate("/login");
    }
  };

  return (
    <Container fluid className="p-0 h-100">
      <Header />
      <Row className="mt-3">
        <Col className="mx-5">
          <Card>
            <Card.Title className="text-center mt-3">Log In</Card.Title>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  className="mb-3"
                  id="email"
                  name="email"
                />
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  className="mb-3"
                  id="password"
                  name="password"
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
