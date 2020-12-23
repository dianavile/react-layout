import React from 'react';
import {Dropdown, DropdownButton} from 'react-bootstrap';

const DropdownLayout = () => {
    return (
        <Dropdown>
            <h1 align="center">Dropdown</h1>
            <DropdownButton
            style={{backgroundColor:"transparent", borderColor:"transparent" }}
            title="Dropdown"
            >
            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </DropdownButton>
        </Dropdown>
    );
}
export default DropdownLayout;