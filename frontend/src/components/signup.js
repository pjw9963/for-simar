import React, { Component } from "react";
import Header from "./header";

import "../css/style.css";

class Signup extends Component {
    render() {
        return (
            <div>
                <Header />
                <div class="page">

                    <form id="signUp" action = "/">

                        <label htmlFor="uname"><b>User Name:</b></label>
                        <input type="text" name="uname" id="uname"/>
                            <p></p>

                        <label htmlFor="email"><b>Email:</b></label>
                        <input type="text" name="email" id="email"/>
                        <p></p>
                        <label htmlFor="psw"><b>Password:</b></label>
                        <input type="password" name="psw" id="psw"/>
                        <p></p>
                        <label htmlFor="psw-repeat"><b>Repeat Password:</b></label>
                        <input type="password" name="psw-repeat" id="psw-repeat"/>
                        <p></p>
                        <input type="submit" value="Sign Up"/>
                    </form>
                    <p></p>
                </div>
            </div>
        );
    }
}

export default Signup;