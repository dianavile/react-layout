import React from 'react';
import {Breadcrumb, Form, FormControl, Button} from 'react-bootstrap';

const BreadcrumbLayout = () => {
    const title = "BreadcrumbSearch";
    return (
        <Breadcrumb>
            <Breadcrumb.Item active href="#">/Home</Breadcrumb.Item>
            <Breadcrumb.Item active href="#">/About</Breadcrumb.Item>
            <Breadcrumb.Item active href="#">/Services</Breadcrumb.Item>
            <Breadcrumb.Item active href="#">/Prices</Breadcrumb.Item>
            <Breadcrumb.Item active href="#">/Contact</Breadcrumb.Item>
            <Breadcrumb.Item active href="#">/NoMatch</Breadcrumb.Item>
        <Form>
            <FormControl type="text" placeholder="Search" className=" mr-sm-2"/>
            <Button>Submit</Button>
        </Form>
        </Breadcrumb>
    );
}
export default BreadcrumbLayout;