import React, { Component } from 'react';


class QuestionBox extends Component {
    render() {
        return (
            <div className="QuestionBox">
                <h3>
                    {this.props.question}
                </h3>
            </div>
        );
    }
}

export default QuestionBox;
