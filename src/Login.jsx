import React, { useState } from "react";
import axios from "axios";
// import "../src/components/Merchantform.css";
// import img1 from "./images/img1.jpeg";
// import Form from 'react-bootstrap/Form';
export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [api, setApi] = useState(" ");

	const lgnbtn = async () => {
		if (email === "") {
			alert("Please Enter email");
			this.setState({ emailError: "enter email" });
			// return false;
		} else if (password === "") {
			alert("Please Enter password");
			return false;
		}
		const regData = { email, api, password };
		const res = await axios.post(
			"http://localhost/rebliss/api/login/all_login",
			regData
		);
		if (res.status === 200) {
			alert("login success");
			setEmail("");
			setPassword("");
		} else {
			alert("Invald username or password");
		}
	};
	return (
		<div className="login_bg">
			<div className="container login_width">
				<div className="col-md-12">
					<form>
						<h1 className="sign_in">Sign In</h1>
						<div className="mb-3 mt-4 top-margin">
							<input
								type="email"
								className="form-control"
								placeholder="Enter email"
								value={email}
								onChange={(e) => setEmail(e.target.value || "")}
								required
							/>
							<p></p>
						</div>

						<div className="mb-3 mt-4">
							<input
								type="password"
								className="form-control"
								placeholder="Enter password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
						<div className="d-grid mt-4">
							<button
								type="button"
								className="btn btn-primary button_height"
								onClick={(e) => lgnbtn()}
							>
								Submit
							</button>
						</div>
						<p className="forgot-password text-right">
							Forgot <a href="#">password?</a>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
}
