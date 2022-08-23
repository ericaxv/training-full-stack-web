import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Search = ({ word, setWord, handleSubmit }) => {
  return (
    <Container className="mt-4" >
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Row>
              <Col xs={12}>
                <Form.Control
                  type="text"
                  value={word}
                  onChange={(e) => setWord(e.target.value)}
                  placeholder="Search..." />
              </Col>
              <Col className="mt-2 text-center">
                <Button
                  type='submit'
                >Search</Button>
              </Col>
            </Form.Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;