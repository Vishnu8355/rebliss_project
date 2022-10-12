import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Password.css";

function Password() {
    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [cPasswordClass, setCPasswordClass] = useState("form-control");
    const [isCPasswordDirty, setIsCPasswordDirty] = useState(false);

    useEffect(() => {
        if (isCPasswordDirty) {
            if (password === cPassword) {
                setShowErrorMessage(false);
                setCPasswordClass("form-control is-valid");
            } else {
                setShowErrorMessage(true);
                setCPasswordClass("form-control is-invalid");
            }
        }
    }, [cPassword]);

    const handleCPassword = (e) => {
        setCPassword(e.target.value);
        setIsCPasswordDirty(true);
    };

    function handleSave() {
        let modal = document.getElementById("modalBtn");
        modal.style.display = "block";
    }

    return (
        <div className="w-full max-w-lg container mx-auto mt-28">
            <form className="password_h shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h1 className="text-white text-center rounded-md text-xl font-semibold">
                    Create password here:
                </h1>
                <div className="mb-4">
                    <label
                        className="block text-white text-gray-700 text-sm font-semibold mb-2"
                        htmlFor="username"
                    >
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="password"
                    />
                </div>
                <div className="mb-6">
                    <label
                        className="block text-white text-gray-700 text-sm font-semibold mb-2"
                        htmlFor="password"
                    >
                        Confirm Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Confirm password"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        onClick={handleSave}
                        className="password_saveBtn  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                    >
                        Save
                    </button>
                </div>
            </form>

            <div className="password_modal" id="modalBtn">
                <div className="innerModal">
                    <h1>Password saved Successfully</h1>
                    <Link to="/joinas">
                        <button>ok</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Password;
