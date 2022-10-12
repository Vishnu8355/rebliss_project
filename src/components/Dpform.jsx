import React, { useState } from "react";
import axios from "axios";
// import "./Demandpartner.css";
// import React, { Component } from "react";
import "./Merchantform.css";
import rebliss_guy_web1 from "../images/rebliss_guy.png";
import Form from "react-bootstrap/Form";

export default function Dpform() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [store, setStore] = useState("");
    const [bussiness, setBussiness] = useState("");
    const [service, setService] = useState("");
    const [password, setPassword] = useState("");
    const [api, setApi] = useState(" ");
    const lgnbtn = async () => {
        if (name === "") {
            alert("Enter your name");
            return false;
        } else if (email === "") {
            alert("Enter your email");
            return false;
        } else if (mobile === "") {
            alert("Enter your mobile");
            return false;
        } else if (store === "") {
            alert("Enter your store name");
            return false;
        } else if (bussiness === "") {
            alert("Select your bussiness type");
            return false;
        } else if (service === "") {
            alert("Select your service");
            return false;
        } else if (password === "") {
            alert("Enter your password");
            return false;
        }
        const regData = {
            name,
            email,
            mobile,
            store,
            bussiness,
            service,
            api,
            password,
        };
        const res = await axios.post(
            "http://localhost/rebliss/api/admin_login/partner_add_user",
            regData
        );
        if (res.status === 200) {
            alert("Demand Partner Registered Successfully");
            setName("");
            setEmail("");
            setMobile("");
            setStore("");
            setBussiness("");
            setService("");
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
                            <b>DEMAND PARTNER</b>
                        </h1>

                        <div className="form-group mt-4">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Company Name *"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className="form-group mt-4">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Mobile/Phone *"
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
                                type="teext"
                                className="form-control"
                                placeholder="Store Name *"
                                value={store}
                                onChange={(e) => setStore(e.target.value)}
                            />
                        </div>
                        <div className="form-group mt-4">
                            <Form.Select
                                aria-label="Default select example"
                                value={bussiness}
                                onChange={(e) => setBussiness(e.target.value)}
                            >
                                <option>Types Of Bussiness *</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </div>

                        <div className="form-group mt-4">
                            <Form.Select
                                aria-label="Default select example"
                                value={service}
                                onChange={(e) => setService(e.target.value)}
                            >
                                <option>Select Current Service *</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
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
                        className="img_style"
                        alt="images"
                        src={rebliss_guy_web1}
                    />
                </div>
            </div>
        </div>
    );
}
