import React from 'react';
import {Form, Col, Button} from 'react-bootstrap';

const FormLayout = () => {
    return (
        <Form>
            <h2 align="center">Form</h2>
        <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>First name</Form.Label>
            <Form.Control type="name" placeholder="Enter first name" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Last name</Form.Label>
            <Form.Control type="familyname" placeholder="Enter last name" />
            </Form.Group>
        </Form.Row>
        <Form.Group controlId="formGridAddress1">
            <Form.Label>Email</Form.Label>
            <Form.Control placeholder="name@mail.com" />
        </Form.Group>
        <Form.Group id="formGridCheckbox">
            <Form.Check type="checkbox" label="Save" />
        </Form.Group>
        <Button variant="primary" type="submit" style={{display: "flex", margin: "auto"}}>
            Submit
        </Button>
        </Form>
    );
}
export default FormLayout;