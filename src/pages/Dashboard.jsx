import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ authenticate, userData }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    authenticate();
    navigate("/");
  };

  return (
    <Container fluid className="h-100 p-0">
      <Header />
      <Row className="mt-5">
        <Col className="p-5 text-center text-uppercase">
          <Card>
            <Card.Body className="p-5">
              <Card.Title>Welcome, {userData.userName}</Card.Title>
              <Button
                variant="outline-danger"
                className="mt-5"
                onClick={handleClick}
              >
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
