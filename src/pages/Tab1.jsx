import React, { Component } from 'react';
import Quiz from 'react-quiz-component';
import { quiz } from './quiz';

export default class pages extends Component {
  render() {

    return <div>

      <Quiz quiz={quiz} />
      
    </div>;
  }
}
