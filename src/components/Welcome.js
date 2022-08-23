import React from "react";
import { Jumbotron, Button, Container } from "react-bootstrap";

const Welcome = () => (
    <Jumbotron>
      <h1>Images Gallery</h1>
      <p>
        This application retrieves photos using unsplash API. To start, type
        some term in the input field.
      </p>
      <p>
        <Button variant="primary" href="https://unsplash.com" target="_blank">
          Learn more...
        </Button>
      </p>
    </Jumbotron>
  
);

export default Welcome;
