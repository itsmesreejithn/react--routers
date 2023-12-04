import React from "react";
import { Col, Container, Row, Card, Form } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Profile = ({ userData }) => {
  return (
    <Container fluid className="p-0 h-100">
      <Header />
      <Row className="mt-3">
        <Col className="mx-3">
          <Card>
            <Card.Body>
              <Card.Title className="text-center mb-2">
                {userData.userName}
              </Card.Title>
              <Form>
                <Form.Group controlId="formFirstName" className="mb-3">
                  <Form.Control
                    type="text"
                    value={userData.firstName}
                    disabled
                  />
                </Form.Group>
                <Form.Group controlId="formLastName" className="mb-3">
                  <Form.Control
                    type="text"
                    value={userData.lastName}
                    disabled
                  />
                </Form.Group>
                <Form.Group controlId="formName" className="mb-3">
                  <Form.Control
                    type="text"
                    value={userData.userName}
                    disabled
                  />
                </Form.Group>
                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Control type="email" value={userData.email} deisabled />
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};

export default Profile;
