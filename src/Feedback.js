import React, { Component } from 'react';


class Feedback extends Component {
    render() {
        return (
            <div className="Feedback">
                <h3>{this.props.feedback}</h3>
            </div>
        );
    }
}

export default Feedback;