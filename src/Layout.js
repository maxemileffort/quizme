import React, { Component } from 'react';
import QuestionBox from './QuestionBox';
import Answers from './Answers';
import Feedback from './Feedback';
import questions from './questions';

// let count = 0;
// for (let i = count; i < questions.length; i = count) {

// } need a button for next question that adds to count, and count # corresponds with question displayed
class Layout extends Component {
  render() {
    return (
      <div className="Layout">
        <h1>Hello there! Welcome to QuizMe!</h1>
        <QuestionBox question={questions.question}/>
        <Answers answers={ questions.answerA }/>
        <Feedback feedback={questions.feedback}/>          
      </div>
    );
  }
}

export default Layout;
