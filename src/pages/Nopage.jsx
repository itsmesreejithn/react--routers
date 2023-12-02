import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const Nopage = () => {
  return (
    <Row className="h-100">
      <Col className="mt-5 h-50">
        <Card className="text-center fs-1 fw-bold my-5 mx-2">
          <Card.Body>
            <Card.Title>404</Card.Title>
            <Card.Text>Page Note Found</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Nopage;
