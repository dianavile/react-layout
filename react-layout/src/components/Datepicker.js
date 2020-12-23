import React from 'react';
import { Form } from 'react-bootstrap';

const Datepicker = () => {
        const title = "Datepicker";
        return (
            <div>
                <h2>{title}</h2>
                <div className="row">
                    <div className="col-md-12">
                        <Form.Group controlId="dob">
                            <Form.Label>Select Date</Form.Label>
                            <Form.Control type="date" name="dob" placeholder="Date of Birth" />
                        </Form.Group>
                    </div>
                </div>
            </div>
        );
};


export default Datepicker;
