import QrCode from "../images/qrCode.png";
import React from "react";
import "./Getapp.css";

function Getapp() {
	return (
		<div className="getapp">
			<div className="getapp_container">
				<img src={QrCode} alt="code-Qr" />
				<span></span>
				{/* <button >Download App</button> */}
				<a href="https://play.google.com/store/apps/details?id=com.rebliss">
					Download App
				</a>
			</div>
		</div>
	);
}

export default Getapp;
