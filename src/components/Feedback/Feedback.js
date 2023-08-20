import React from 'react';
import FeedbackStyled from "./Feedback.styled";

class Feedback extends React.Component {
    render() {
        return (
            <div>
                <h2>Please leave feedback</h2>
                <button type="button" onClick={}>Good</button>
                <button type="button" onClick={}>Neutral</button>
                <button type="button" onClick={}>Bad</button>
                <h3>Statistics</h3>
<span>Good: 0</span>
<span>Neutral: 0</span>
<span>Bad: 0</span>
            </div>
        )
    }
}

export default Feedback;