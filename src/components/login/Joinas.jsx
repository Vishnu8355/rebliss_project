import React from "react";
import { Link } from "react-router-dom";

import GroupIcon from "@mui/icons-material/Group";
import "./Joinas.css";
export default function joinas() {
    return (
        <>
            <div className="sectionfrm">
                <div className="logofrm">
                    <h1 className="font-bold text-center text-4xl pb-16">
                        Welcome to the world of opportunities
                    </h1>
                    <div className="iconarea">
                        <Link to="/afterjoin">
                            <div className="cardd">
                                <GroupIcon className="grpicon" />
                                <p>Join as Saathi</p>
                            </div>
                        </Link>
                        <Link to="/afterjoin">
                            <div className="cardd">
                                <GroupIcon className="grpicon" />
                                <p>Join as TSM</p>
                            </div>
                        </Link>

                        <Link to="/afterjoin">
                            <div className="cardd">
                                <GroupIcon className="grpicon" />
                                <p>Join as Partner</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
