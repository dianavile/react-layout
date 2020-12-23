import React from 'react';
import {Container, Row, Col} from 'react-bootstrap/'
import DropdownLayout from './components/DropdownLayout';
import BreadcrumbLayout from './components/BreadcrumbLayout';
import CardLayout from './components/CardLayout';
import Checkbox from './components/Checkbox';
import CarouselLayout from './components/CarouselLayout';
import FormLayout from './components/FormLayout';
import Datepicker from './components/Datepicker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles.css';


const App = () => {
  return (
    <Container fluid className="containerFluidLayout">
      <Row>
      <Col className="side1" lg={7}>
        <Row className="row1Side1">
          <Col xs={8} className="BreadcrumbLayout"><BreadcrumbLayout/></Col>
          <Col xs={4} className="CardLayout"><CardLayout/></Col>
        </Row>
        <Row className="row2Side1">
          <Col xs={3} className="Datepicker"><Datepicker/></Col>
          <Col xs={9} className="DropdownLayout"><DropdownLayout/></Col>
        </Row>
      </Col>
      <Col className="side2" lg={5}>
        <Row>
          <Col lg={6} className="FormLayout"><FormLayout/></Col>
          <Col lg={6} className="side2sub2">
            <Row>
              <Col lg={12} className="CarouselLayout" style={{display: "flex"}}><CarouselLayout/></Col>
            </Row>
            <Row>
              <Col lg={12} className="CheckboxLayout"><Checkbox/></Col>
            </Row>
          </Col>
        </Row>
      </Col>
      </Row>
    </Container>
  )
}

export default App;
