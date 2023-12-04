import React from "react";
import { Card } from "react-bootstrap";

const Cards = ({ title, content }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title className="text-uppercase fst-italic">{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Cards;
