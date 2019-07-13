import React from "react";
import { Nav } from "react-bootstrap";
import Button from "./Button.jsx";

// Should the button elements be changed to Nav.Links's??
// TODO: figure that out , maybe

const NavBar = () => {
    return(
       <Nav className="justify-content-center border rounded">
           <Button text="Go Home" to="/"/>
           <Button text="View People" to="/people" />
           <Button text="View Films" to="/films"/>
       </Nav>
    )
};

export default NavBar;
