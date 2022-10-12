import React, { useState } from "react";
import axios from "axios";
// import React, { Component } from "react";
import "./Merchantform.css";
import rebliss_guy_web1 from "../images/rebliss_guy.png";
// import Form from "react-bootstrap/Form";

export default function Saathiform() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [zip, setZip] = useState("");
    const [referal, setReferal] = useState("");
    const [password, setPassword] = useState("");
    const [api, setApi] = useState(" ");
    const lgnbtn = async () => {
        if (name === "") {
            alert("Enter your name");
            return false;
        } else if (mobile === "") {
            alert("Enter your mobile");
            return false;
        } else if (email === "") {
            alert("Enter your email");
            return false;
        } else if (zip === "") {
            alert("Enter your zip code");
            return false;
        } else if (password === "") {
            alert("Enter your password");
            return false;
        }

        const regData = { name, email, mobile, referal, zip, api, password };
        const res = await axios.post(
            "http://localhost/rebliss/api/admin_login/sathi_add_user",
            regData
        );
        if (res.status === 200) {
            alert("Saathi Registered Successfully");
            setName("");
            setEmail("");
            setMobile("");
            setReferal("");
            setZip("");
            setApi("");
            setPassword("");
        }
    };
    return (
        <div className="container form_width paddingContainer">
            <div className="row">
                <div className="col-md-6 merchant_top">
                    <form>
                        <h1 className="merchant_width">
                            <b>SAATHI</b>
                        </h1>

                        <div className="form-group mt-4">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Name *"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className="form-group mt-4">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Mobile *"
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                            />
                        </div>
                        <div className="form-group mt-4">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email *"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="form-group mt-4">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Zip Code *"
                                value={zip}
                                onChange={(e) => setZip(e.target.value)}
                            />
                        </div>
                        <div className="form-group mt-4">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Referal Code"
                                value={referal}
                                onChange={(e) => setReferal(e.target.value)}
                            />
                        </div>

                        <div className="form-group mt-4">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Password *"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button
                            type="button"
                            className="btn btn-dark btn-lg btn-block button_color"
                            onClick={(e) => lgnbtn()}
                        >
                            Register
                        </button>
                        <p className="forgot-password text-right">
                            Already registered <a href="/">log in?</a>
                        </p>
                    </form>
                </div>
                <div className="col-md-6">
                    <img
                        className="img_style_sathi"
                        alt="#"
                        src={rebliss_guy_web1}
                    />
                </div>
            </div>
        </div>
    );
}
