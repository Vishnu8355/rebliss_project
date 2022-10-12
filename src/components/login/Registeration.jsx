import React, { useState } from "react";
import { Link } from "react-router-dom";
// import {useDispatch,useSelector} from "react-redux";
// import {RegPage} from "../action";
import "./Registeration.css";

export default function Registeration() {
    // const auth = useSelector(state=>state.auth);
    // const dispatch = useDispatch();
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [mobile, setMobile] = useState("");
    const [gender, setGender] = useState("");
    const [occupation, setOccupation] = useState("");
    const [education, setEducation] = useState("");
    const [agelimit, setAgelimit] = useState("");
    const [referral, setReferral] = useState("");
    const [zipcode, setZipcode] = useState("");

    const regData = () => {
        const data = {
            fname,
            lname,
            mobile,
            gender,
            occupation,
            agelimit,
            referral,
            zipcode,
            education,
        };
        // dispatch(RegPage(data));
    };

    // if(auth?.user?.otpVerification==="0"){
    //   return <Redirect to={"/otp"}/>
    // }

    // function dynInput(cbox) {
    //     if (cbox.checked) {
    //         var input = document.createElement("input");
    //         input.type = "text";
    //         var div = document.createElement("div");
    //         div.id = cbox.name;
    //         div.innerHTML = "Text to display for " + cbox.name;
    //         div.appendChild(input);
    //         document.getElementById("insertinputs").appendChild(div);
    //     } else {
    //         document.getElementById(cbox.name).remove();
    //     }
    // }

    return (
        <>
            {/* component */}
            <div className="min-h-screen p-6 bg-sky-50 flex items-center justify-center">
                <div className="container max-w-screen-lg mx-auto">
                    <div>
                        <Link
                            to="/"
                            className="font-semibold text-3xl text-sky-500"
                        >
                            reBLISS.in
                        </Link>
                        <p className="text-gray-500 mb-6">
                            reBLISS के साथ , जितनी मेहनत उतनी कमाई...
                        </p>
                        <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                                <div className="text-gray-600">
                                    <p className="font-medium text-lg">
                                        Create an Account
                                    </p>
                                    <p>Please fill out all the fields.</p>
                                </div>
                                <div className="lg:col-span-2">
                                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                        <div className="md:col-span-2">
                                            <label htmlFor="address">
                                                First Name{" "}
                                                <span className="text-red-400">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                type="text"
                                                name="fname"
                                                id="address"
                                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                onChange={(e) =>
                                                    setFname(e.target.value)
                                                }
                                            />
                                        </div>
                                        <div className="md:col-span-2">
                                            <label htmlFor="city">
                                                Last Name{" "}
                                                <span className="text-red-400">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                type="text"
                                                name="lname"
                                                id="city"
                                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                onChange={(e) =>
                                                    setLname(e.target.value)
                                                }
                                            />
                                        </div>
                                        <div className="md:col-span-2">
                                            <label htmlFor="">
                                                Mobile No.{" "}
                                                <span className="text-red-400">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                type="text"
                                                name="mobile"
                                                id="mobile"
                                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                onChange={(e) =>
                                                    setMobile(e.target.value)
                                                }
                                            />
                                        </div>
                                        <div className="md:col-span-2">
                                            <label htmlFor="gender">
                                                Gender{" "}
                                                <span className="text-red-400">
                                                    *
                                                </span>
                                            </label>
                                            <select
                                                type="text"
                                                name="gender"
                                                id="gender"
                                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                onChange={(e) =>
                                                    setGender(e.target.value)
                                                }
                                            >
                                                <option></option>
                                                <option>Male</option>
                                                <option>Female</option>
                                                <option>Transgender</option>
                                            </select>
                                        </div>

                                        <div className="md:col-span-2">
                                            <label htmlFor="gender">
                                                Select Occupation{" "}
                                                <span className="text-red-400">
                                                    *
                                                </span>
                                            </label>
                                            <select
                                                type="text"
                                                name="occupation"
                                                id="occupation"
                                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                onChange={(e) =>
                                                    setOccupation(
                                                        e.target.value
                                                    )
                                                }
                                            >
                                                <option></option>
                                                <option>HouseWife</option>
                                                <option>Not Working</option>
                                                <option>Student</option>
                                                <option>Retired</option>
                                                <option>Salaried</option>
                                                <option>
                                                    Self Employed / Own Business
                                                </option>
                                                <option>
                                                    Self Employed / Professional
                                                </option>
                                            </select>
                                        </div>
                                        <div className="md:col-span-2">
                                            <label htmlFor="gender">
                                                Select Age limit{" "}
                                                <span className="text-red-400">
                                                    *
                                                </span>
                                            </label>
                                            <select
                                                type="text"
                                                name="agelimit"
                                                id="agelimit"
                                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                onChange={(e) =>
                                                    setAgelimit(e.target.value)
                                                }
                                            >
                                                <option></option>
                                                <option>18-20</option>
                                                <option>21-30</option>
                                                <option>31-40</option>
                                                <option>41-50</option>
                                                <option>51-60</option>
                                                <option>60+</option>
                                            </select>
                                        </div>

                                        <div className="md:col-span-2 flex items-center">
                                            <input
                                                type="checkbox"
                                                name="merchantcheckbox"
                                                id="merchantcheckbox"
                                                className="h-5 border mt-1 rounded px-4 bg-gray-50"
                                                onChange={(e) => {
                                                    if (
                                                        e.currentTarget.checked
                                                    ) {
                                                        alert(
                                                            "You will become merchant after selecting store option"
                                                        );
                                                        let showDiv =
                                                            document.getElementById(
                                                                "insertinputs"
                                                            );
                                                        showDiv.style.display =
                                                            "block";
                                                    } else {
                                                        // alert("not checked");
                                                        let showDiv =
                                                            document.getElementById(
                                                                "insertinputs"
                                                            );
                                                        showDiv.style.display =
                                                            "none";
                                                    }
                                                }}
                                            />
                                            <label
                                                htmlFor="merchantcheckbox"
                                                // className="mb-2"
                                            >
                                                Do you have a store?
                                            </label>
                                        </div>

                                        <div
                                            className="md:col-span-2"
                                            id="insertinputs"
                                        >
                                            <input
                                                type="text"
                                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                placeholder="Enter store name"
                                            />
                                        </div>

                                        <div className="md:col-span-2">
                                            <label htmlFor="gender">
                                                Select Education{" "}
                                                <span className="text-red-400">
                                                    *
                                                </span>
                                            </label>
                                            <select
                                                type="text"
                                                name="education"
                                                id="education"
                                                className="h-10 border mt-1     rounded px-4 w-full bg-gray-50"
                                                onChange={(e) =>
                                                    setEducation(e.target.value)
                                                }
                                            >
                                                <option></option>
                                                <option>Below 10th</option>
                                                <option>10th</option>
                                                <option>12th</option>
                                                <option>ITI</option>
                                                <option>Diploma</option>
                                                <option>Graduate</option>
                                                <option>Post Graduate</option>
                                            </select>
                                        </div>

                                        <div className="md:col-span-2">
                                            <label htmlFor="zipcode">
                                                Zip Code{" "}
                                                <span className="text-red-400">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                type="text"
                                                name="zipcode"
                                                id="zipcode"
                                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                onChange={(e) =>
                                                    setZipcode(e.target.value)
                                                }
                                            />
                                        </div>
                                        <div className="md:col-span-2">
                                            <label htmlFor="email">
                                                Referral Code{" "}
                                                <span className="text-red-400">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                type="text"
                                                name="referral"
                                                id="referral"
                                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                onChange={(e) =>
                                                    setReferral(e.target.value)
                                                }
                                            />
                                        </div>

                                        <div className="md:col-span-5 text-right">
                                            <div className="inline-flex items-end">
                                                <Link to="/otpver">
                                                    <button
                                                        className="text-white font-bold py-2 px-4 rounded"
                                                        id="signupBtn"
                                                        onClick={(e) =>
                                                            regData()
                                                        }
                                                    >
                                                        Signup
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
