import React from "react";
import { Card } from "react-bootstrap";

const Nopage = () => {
  return (
    <div className="container-fluid">
      <Card>
        <Card.Body>
          <Card.Title>404</Card.Title>
          <Card.Text>Page Not Found</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Nopage;
