import React from "react";
import {Button, Card} from "react-bootstrap";

const ImageCard = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1415369629372-26f2fe60c467?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNDExMjR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTgxMDI5Mjk&ixlib=rb-1.2.1&q=80" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default ImageCard;
