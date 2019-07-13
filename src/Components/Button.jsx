import React from "react";
import { Link } from "react-router-dom";


const Button = ( props ) => {
    return(
        <div className="Button">
            <Link to={props.to} className="active">
            <button className="btn-primary m-3 text-center text-white rounded-pill" type="button">
            { props.text }
        </button>
        </Link>
        </div>
    )
};

export default Button;