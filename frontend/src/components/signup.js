import React, { Component } from "react";
import Header from "./header";

import "../css/style.css";

class Signup extends Component {

    onSubmit = (e) => {
        e.preventDefault();
        let payload = {
            uname: this.state.uname,
            psw: this.state.psw,
        };

        fetch("http://localhost:3001/users/api/login", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        })
            .then((res) => res.json())
            .then((json) => console.log(json));

        if(payload.uname === "mod" && payload.psw === "mod") {
            this.props.history.push('/mod');
        }
        else
        {
            this.props.history.push('/login');
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

                    <form
                        onSubmit={(e)=>this.onSubmit(e)}
                    >

                        <div className="v-spacing">
                            <label htmlFor="uname"><b>Username: </b></label>
                            <input
                                type="text"
                                name="uname"
                                onChange={this.unameChange}
                            />
                        </div>
                        <div className="v-spacing">
                            <label htmlFor="email"><b>Email: </b></label>
                            <input
                                type="text"
                                name="email"
                            />
                        </div>
                        <div className="v-spacing">
                            <label htmlFor="psw"><b>Password: </b></label>
                            <input
                                type="password"
                                name="psw"
                                onChange={this.pswChange}
                            />
                        </div>
                        <input type="submit" value="Sign Up"/>
                    </form>
                    <p></p>
                </div>
            </div>
        );
    }
}

export default Signup;