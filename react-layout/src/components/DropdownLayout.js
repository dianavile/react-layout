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
            <Dropdown.Item eventKey="1">Dropdown1</Dropdown.Item>
            <Dropdown.Item eventKey="2">Dropdown2</Dropdown.Item>
            <Dropdown.Item eventKey="3">Dropdown3</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Dropdown4</Dropdown.Item>
            </DropdownButton>
        </Dropdown>
    );
}
export default DropdownLayout;