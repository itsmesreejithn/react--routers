import React from "react";
import { Row, Col, Container, Card, Form, Button } from "react-bootstrap";

const Login = () => {
  return (
    <Container fluid className="login-container">
      <Row>
        <Col>
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
    </Container>
  );
};

export default Login;
