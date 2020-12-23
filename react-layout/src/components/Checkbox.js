import React from 'react';
import {Form} from 'react-bootstrap';

const Checkbox = () => {
    return (
        <Form>
            <h2 align="center">Checkbox</h2>
            {['checkbox'].map((type) => (
                <div
                    style={{ textAlign: "center" }}
                    key={`inline-${type}`}
                    className="mb-3"
                >
                <Form.Check inline label="Option 1" type={type} id={`inline-${type}-1`} />
                <Form.Check inline label="Option 2" type={type} id={`inline-${type}-2`} />
            </div>
            ))}
        </Form>
    );
}
export default Checkbox;