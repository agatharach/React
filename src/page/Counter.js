import React from "react";
import { connect } from "unistore/react";
import { actions } from "../store";

class Counter extends React.Component {
    render() {
        console.log("props", this.props);

        return (
            <div>
                <div>Count: {this.props.count} </div>
                <button onClick={this.props.increment}>Add</button>
            </div>
        );
    }
}

export default connect(
    "count,is_login",
    actions
)(Counter);
