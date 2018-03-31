import React, { Component } from 'react';

class Answers extends Component {
    render() {
        return (
            <div className="Answers">
                <p>
                    {this.props.answers}
                </p>
            </div>
        );
    }
}

export default Answers;