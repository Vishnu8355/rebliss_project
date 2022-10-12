import React from "react";
import "./Whocanearn.css";
import saathiwce from "../images/Saathiwce.jpg";
import Studentwce from "../images/Studentwce.jpg";
import Selfwce from "../images/Selfwce.jpg";
import Salariedwce from "../images/Salariedwce.jpg";

function Whocanearn() {
    return (
        <div className="whocanearn">
            <h1 data-aos="fade-down">Who can earn with reBLISS</h1>
            <div className="whocanearn_options">
                <div className="whocanearn_one" data-aos="fade-right">
                    <img src={saathiwce} alt="saathi" className="img11" />
                    <h2 className="whocannearn_names">Saathi</h2>
                </div>
                <div className="whocanearn_one" data-aos="fade-left">
                    <img src={Studentwce} alt="saathi" />
                    <h2 className="whocannearn_names">Students</h2>
                </div>
                <div className="whocanearn_one" data-aos="fade-right">
                    <img src={Selfwce} alt="saathi" />
                    <h2 className="whocannearn_names">Self Employed</h2>
                </div>
                <div className="whocanearn_one" data-aos="fade-left">
                    <img src={Salariedwce} alt="saathi" />
                    <h2 className="whocannearn_names">Salaried Person</h2>
                </div>
            </div>
        </div>
    );
}

export default Whocanearn;
