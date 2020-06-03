import React, { Component } from 'react';
import { ProgressBar } from "react-bootstrap";
class SampleComponent extends Component {
    render() {
      return <ProgressBar now={60} />;
    }
}

export default SampleComponent;