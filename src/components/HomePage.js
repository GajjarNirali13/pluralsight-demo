import React from "react";
import {Link} from "react-router-dom";

function HomePage () {
    return(
        <div className="jumbotron">
            <h1>Hello Nirali</h1>
            <p>React, Flux for webapp</p>
            <Link to="about" className="btn btn-primary">About</Link>
        </div>
    )
}

export default HomePage;