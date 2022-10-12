import React from "react";
import "./Homebody.css";
import Downloads from "./Downloads";
import Benefits from "./Benefits";
// import Meet from "./Meet";
import Operating from "./Operating";
import Whocanearn from "./Whocanearn";

function Homebody() {
    return (
        <div className="homebody">
            <Benefits />
            <Whocanearn />
            <Downloads />
            <Operating />
            {/* <Meet /> */}
        </div>
    );
}

export default Homebody;
