import React from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleClick = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1
    }));
  };

  render() {
    const { good, neutral, bad, feedbackReceived } = this.state;
    const total = good + neutral + bad;
    const positivePercentage = total === 0 ? 0 : Math.round((good / total) * 100);
  
    return (
      <div>
        <h2>Please leave feedback</h2>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.handleClick}
        />
        {feedbackReceived ? (
          <div>
            <h3>Statistics</h3>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          </div>
        ) : (
          <p>There is no feedback</p>
        )}
      </div>
    );
  }
}

export default Feedback;
