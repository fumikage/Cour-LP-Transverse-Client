import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";

class MyProgressBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {progress: 50};
    }


    render() {
        return (
            <div>
                <ProgressBar variant="warning" animated now={this.props.counter} label={`${this.props.counter}%`} />
            </div>
        );
    }
}

export default MyProgressBar;