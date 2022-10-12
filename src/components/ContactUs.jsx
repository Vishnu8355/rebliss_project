import React, { useState } from "react";
import axios from "axios";
import "./ContactUs.css";

function ContactUs() {
    const [name, setName] = useState("");

    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [subject, setSubject] = useState("");

    const [message, setMessage] = useState("");

    const lgnbtn = async () => {
        if (name === "") {
            alert("Please enter name");
            return false;
        } else if (email === "") {
            alert("Please enter name");
            return false;
        } else if (mobile === "") {
            alert("Please enter mobile");
            return false;
        } else if (subject === "") {
            alert("Please enter subject");
            return false;
        }
        //  else if (message === "") {
        //     alert("Please enter message");
        //     return false;
        // }
        alert("Your response is submitted..");
        const regData = { name, email, mobile, subject, message };
        const res = await axios.post(
            "http://localhost/rebliss/api/contact/add_user",
            regData
        );
        if (res.status === 200) {
            alert("submitted successfully!");
            setName("");

            setEmail("");
            setMobile("");
            setSubject("");
            setMessage("");
        }
    };

    return (
        <div className="contact_formHeading">
            <h1 data-aos="zoom-out">CONTACT US</h1>
            <div className="contact_form">
                <form
                    action="https://formsubmit.co/eb184dc1e693b0db15b078a6f793c9af"
                    method="POST"
                    data-aos="zoom-in"
                >
                    <label for="name">Full Name</label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Enter your name *"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label for="mobile">Mobile no.</label>

                    <input
                        id="mobile"
                        type="text"
                        name="mobile"
                        placeholder="Enter mobile number *"
                        required
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                    />
                    <label for="email">Email</label>

                    <input
                        id="email"
                        type="text"
                        name="email"
                        placeholder="Enter email id *"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label for="message">Message</label>

                    <input
                        id="message"
                        type="message"
                        name="message"
                        placeholder="Enter Subject"
                        required
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />

                    {/* below code is for not showing captcha page */}
                    <input type="hidden" name="_captcha" value="false"></input>

                    {/*  below code is for redirecting to the rebliss.in after clicking submit button */}
                    <input
                        type="hidden"
                        name="_next"
                        value="https://rebliss.in"
                    ></input>

                    <button type="submit" onClick={(e) => lgnbtn()}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ContactUs;
