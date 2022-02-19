import React from 'react';
import Header from './common/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from './Components/Sidebar';
import Section from './Components/Section';

export default function routes() {

  return (
    <div style={{ backgroundColor: 'var(--primary-bg-color)' }}>
      <Header />

      <Container>
        <Row>
          <Col style={{ position: 'sticky' }}>
            <Sidebar />
          </Col>

          <Col xs={7} style={{ borderLeft: '1px solid gray' }}>
            <section id="section8">
              <Section />
            </section>
          </Col>

          <Col xs={3} style={{ borderLeft: '1px solid gray' }}>
            <h4>Here it is </h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
