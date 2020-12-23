import React from 'react';
import {Breadcrumb, Form, FormControl, Button} from 'react-bootstrap';

const BreadcrumbLayout = () => {
    return (
        <Breadcrumb>
        <Breadcrumb.Item href="#">/Breadcrumb</Breadcrumb.Item>
        <Form>
            <FormControl type="text" placeholder="Search" className=" mr-sm-2"/>
            <Button>Submit</Button>
        </Form>
        </Breadcrumb>
        
    );
}
export default BreadcrumbLayout;