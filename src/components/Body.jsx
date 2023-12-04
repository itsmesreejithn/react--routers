import React from "react";
import { Row, Col } from "react-bootstrap";
import Cards from "./Cards";

const Body = () => {
  const body = [
    {
      title: "card1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error soluta similique expedita ipsam id rerum quos pariatur impedit. Illum, aperiam!",
    },
    {
      title: "card2",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error soluta similique expedita ipsam id rerum quos pariatur impedit. Illum, aperiam!",
    },
    {
      title: "card3",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error soluta similique expedita ipsam id rerum quos pariatur impedit. Illum, aperiam!",
    },
    {
      title: "card4",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error soluta similique expedita ipsam id rerum quos pariatur impedit. Illum, aperiam!",
    },
    {
      title: "card5",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error soluta similique expedita ipsam id rerum quos pariatur impedit. Illum, aperiam!",
    },
    {
      title: "card6",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error soluta similique expedita ipsam id rerum quos pariatur impedit. Illum, aperiam!",
    },
  ];
  return (
    <div className="body-component fw-bolder fs-3 text-center">
      <Row className="mx-5">
        {body.map((cont) => (
          <Col md={12} className="my-5">
            <Cards title={cont.title} content={cont.content} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Body;
