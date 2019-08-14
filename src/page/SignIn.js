import React, { Component } from "react";
import axios from "axios";
import Headernews from "../component/Header2";
import { connect } from "unistore/react";
import { actions } from "../store";

class SignIn extends Component {
    postLogin = () => {
        const self = this;
        axios
            .post("https://reactagatha.free.beeceptor.com/login")

            .then(function(response) {
                console.log(response.data);
                // localStorage.setItem("username", response.data.username);
                // localStorage.setItem("password", response.data.password);
                // localStorage.setItem("status", response.data.status);
                self.props.setuserName(response.data.username);
                self.props.setpassWord(response.data.password);
                self.props.login();
                // console.log(self.props.status);
                console.log(self.props);
                self.props.history.push("/profile");
            })

            .catch(function(error) {
                console.log(error);
            });
    };
    render() {
        return (
            <div>
                <Headernews />;
                <div className="login">
                    <section className="content signin">
                        <form onSubmit={e => e.preventDefault()}>
                            <h4>SignIn</h4>
                            <div>
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                />
                            </div>
                            <div>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                />
                            </div>
                            <button onClick={() => this.postLogin()}>
                                SignIn
                            </button>
                        </form>
                    </section>
                </div>
            </div>
        );
    }
}
export default connect(
    "username,password,status",
    actions
)(SignIn);
