import React, { Component } from "react";
import axios from "axios";
import Headernews from "../component/Header2";

class SignIn extends Component {
    state = { username: "", password: "" };
    changeInput = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    postLogin = () => {
        const { username, password, status } = this.state;
        const data = {
            username: username,
            password: password,
            status: status
        };
        const self = this;
        axios
            .post("https://reactagatha.free.beeceptor.com/login", data)

            .then(function(response) {
                console.log(response.data);
                localStorage.setItem("username", response.data.username);
                localStorage.setItem("password", response.data.password);
                localStorage.setItem("status", response.data.status);
                self.props.history.push("/profile");
            })

            .catch(function(error) {
                console.log(error);
            });
    };
    render() {
        console.log("state", this.state);
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
                                    onChange={e => this.changeInput(e)}
                                />
                            </div>
                            <div>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    onChange={e => this.changeInput(e)}
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
export default SignIn;
