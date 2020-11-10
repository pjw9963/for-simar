import React, { Component } from "react";
import Header from "./header";

import "../css/style.css";

class Login extends Component {

    onSubmit = (e) => {
        e.preventDefault();
        let payload = {
            uname: this.state.uname,
            psw: this.state.psw,
        };

        if(payload.uname === "mod" && payload.psw === "mod") {
            this.props.history.push('/mod');
        }
        else
        {
            this.props.history.push('/');
        }
    };

    unameChange = (e) => {
        this.setState({ uname: e.target.value });
    };

    pswChange = (e) => {
        this.setState({ psw: e.target.value });
    };

    render() {
        return (
            <div>
                <Header />
                <div class="page">

                    <div id = "login">
                    <form
                        onSubmit={(e)=>this.onSubmit(e)}
                    >
                        <div class="v-spacing">
                        <label htmlFor="uname"><b>Username: </b></label>
                        <input
                            type="text"
                            name="uname"
                            onChange={this.unameChange}
                        />
                        </div>
                        <div class="v-spacing">
                            <label htmlFor="psw"><b>Password: </b></label>
                            <input
                                type="password"
                                name="psw"
                                onChange={this.pswChange}
                            />
                        </div>
                                <input type="submit" value="Log In" id="submit"/>
                    </form>
                        <p></p>
                        <p></p>
                    <form action="signup">
                        <input type="submit" value="Sign Up"/>
                    </form>
                    <p></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
