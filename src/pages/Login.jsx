import React from "react";
import { Row, Col, Container, Card, Form, Button } from "react-bootstrap";

const Login = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Card>
            <Card.Title>Log In</Card.Title>
            <Card.Body>
              <Form>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Control type="password" placeholder="Enter password" />
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
