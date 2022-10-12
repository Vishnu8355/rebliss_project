import React from "react";
import "./Operating.css";
import map from "../images/map3.png";

function Operating() {
    return (
        <div className="operating">
            <span data-aos="fade-down">
                Successfully Operating In
                <span>50+</span>
                Cities
            </span>
            <div className="bgMap" data-aos="fade-down">
                <img src={map} alt="India Map" />
            </div>
        </div>
    );
}

export default Operating;
