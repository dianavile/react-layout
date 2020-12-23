import React from 'react';
import {Dropdown, DropdownButton} from 'react-bootstrap';

const DropdownLayout = () => {
    const title = "Dropdown";
    return (
        <div>
            <h2 align="center">{title}</h2>
            <div className="row">
                <div className="col-md-12">
                    <Dropdown>
                        <DropdownButton
                            align="center"
                            style={{ backgroundColor: "transparent", borderColor: "transparent" }}
                            title="Dropdown"
                        >
                        <Dropdown.Item eventKey="1">DropdownItem1</Dropdown.Item>
                        <Dropdown.Item eventKey="2">DropdownItem2</Dropdown.Item>
                        <Dropdown.Item eventKey="3">DropdownItem3</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">DropdownItem4</Dropdown.Item>
                        </DropdownButton>   
                    </Dropdown>  
                </div>
            </div>   
        </div> 
    );
}
export default DropdownLayout;