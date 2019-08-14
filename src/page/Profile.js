import React from "react";
import { Redirect } from "react-router-dom";
import Headernews from "../component/Header2";

function Profile(props) {
    const is_login = localStorage.getItem("status");
    const username = localStorage.getItem("username");
    console.log(is_login);
    if (is_login) {
        return (
            <div>
                <Headernews />
                <div className="output">
                    <h1>{username} berhasil login</h1>
                </div>
            </div>
        );
    } else {
        return <Redirect to={{ pathname: "/signin" }} />;
    }
}

export default Profile;
