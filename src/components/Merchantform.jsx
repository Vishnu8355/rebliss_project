import React, { useState } from "react";
import axios from "axios";
// import React, { Component } from "react";
import "./Merchantform.css";
import rebliss_guy_web1 from "../images/rebliss_guy.png";
import Form from "react-bootstrap/Form";

export default function Merchantform() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [gst, setGst] = useState("");
    const [bussiness, setBussiness] = useState("");
    const [goods, setGoods] = useState("");
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
        } else if (goods === "") {
            alert("Select your Goods");
            return false;
        } else if (bussiness === "") {
            alert("Select your bussiness details");
            return false;
        } else if (gst === "") {
            alert("Enter your GST No.");
            return false;
        } else if (password === "") {
            alert("Enter your passowrd");
            return false;
        }
        const regData = {
            name,
            email,
            mobile,
            gst,
            bussiness,
            goods,
            api,
            password,
        };
        const res = await axios.post(
            "http://localhost/rebliss/api/admin_login/marchant_add_user",
            regData
        );
        if (res.status === 200) {
            alert("Merchant Registered Successfully");
            setName("");
            setEmail("");
            setMobile("");
            setGoods("");
            setBussiness("");
            setGst("");
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
                            <b>MERCHANT</b>
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
                            <Form.Select
                                aria-label="Default select example"
                                value={goods}
                                onChange={(e) => setGoods(e.target.value)}
                            >
                                <option>Nature Of Goods *</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
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
                            <input
                                type="text"
                                className="form-control"
                                placeholder="GST Number *"
                                value={gst}
                                onChange={(e) => setGst(e.target.value)}
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
                    <img className="img_style" alt="" src={rebliss_guy_web1} />
                </div>
            </div>
        </div>
    );
}
