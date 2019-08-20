import React from "react";
import { Nav } from "react-bootstrap";
import Button from "./Button.jsx";



const NavBar = () => {
    return(
       <Nav className="justify-content-center border rounded-left mt-1">
           <Button text="Go Home" to="/"/>
           <Button text="View People" to="/people" />
           <Button text="View Films" to="/films"/>
       </Nav>
    )
};

export default NavBar;
