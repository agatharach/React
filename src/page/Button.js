import React from "react";
import { connect } from "unistore/react";
import { actions } from "../store";

function Button(props) {
    console.log("button", this.props);

    return (
        <div>
            <button onClick={this.props.increment}>Add</button>
        </div>
    );
}

export default connect(
    "",
    actions
)(Button);
