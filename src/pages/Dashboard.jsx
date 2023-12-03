import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Header from "../components/Header";

const Dashboard = () => {
  return (
    <Container fluid className="h-100">
      <Header />
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Welcome, user.name</Card.Title>
              <Button variant="ouline-danger">Log out</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
