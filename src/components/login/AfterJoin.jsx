import React from "react";
import { Link } from "react-router-dom";
import "./Customcss.css";

function AfterJoin() {
    return (
        <div className="bg_img">
            <div className="afterjoin_mainBox">
                <div className="afterjoin_h1tags">
                    <h1>Hello,</h1>
                    <h1>Saksham Mishra</h1>
                </div>
                <div className="afterjoin_img">
                    <img
                        src="https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
                        alt=""
                    />
                </div>
                <Link to="/">
                    <div className="afterjoin_button">
                        Get ready for assignment
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default AfterJoin;
