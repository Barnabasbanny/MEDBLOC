import React from "react";
import "../Password/password.css";
import "../Password/forgotpassword.jsx";
import logo from "../Password/images/logo";
import desk from "../Password/images/desk";
// import { Link } from "react-router-dom";

export default function Landing() {
    return (
        <div className="">
            <div className="container">
                <div className="container-1">
                    <img src={logo} alt="medbloc-logo" id="logo" />
                    <h2>Verification Code</h2>
                    <p>
                        Verification code sent to chimuanyaruth20@email.com
                    </p>
                    <input type="email" name="Email" id="email" placeholder="Email Address" required></input>
                    <p>05:54 Resend confirmation code</p>
                    <input type="submit" id="btn" value="Continue"></input>
                </div>

                <div className="container-2">
                <img src={desk} alt="deskimage" id="desk" />
                </div>
            </div>
        </div>
    )
}