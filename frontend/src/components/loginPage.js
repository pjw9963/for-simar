import React, { Component } from "react";
import Header from "./header";

import "../css/style.css";

class Login extends Component {
    render() {
        return (
            <div>
                <Header />
                <div class="page">

                    <form id="signIn" action="mod">

                        <label htmlFor="uname"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="uname" id="uname"/>
                            <p></p>
                            <label htmlFor="psw"><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" name="psw" id="psw"/>
                                <p></p>
                                <input type="submit" value="Log In" id="submit"/>
                    </form>
                    <form action="signup">
                        <input type="submit" value="Sign Up"/>
                    </form>
                    <p></p>
                </div>
            </div>
        );
    }
}

export default Login;
