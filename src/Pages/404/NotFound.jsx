import React from 'react';
import './NotFound.css'
import {Link} from "react-router-dom";

function NotFound() {
    return (
        <div className="overlay">
            <div className="bottom">
                <h1>¯\_(ツ)_/¯</h1>
                <h3>404 Not Found</h3>
                <Link to={'/'}>Go to Home</Link>
            </div>
        </div>
    );
}

export default NotFound;