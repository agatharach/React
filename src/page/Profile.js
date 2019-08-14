import React from "react";
import { Redirect } from "react-router-dom";
import Headernews from "../component/Header2";
import { connect } from "unistore/react";
import { actions } from "../store";

function Profile(props) {
    const is_login = props.status;
    const username = props.username;
    // console.log(is_login);
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

export default connect(
    "username,status",
    actions
)(Profile);
