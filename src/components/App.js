import { Component } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
import s from './App.module.scss';
import 'modern-normalize/modern-normalize.css';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  increment = value => () => {
    this.setState(prevState => ({
      [value]: prevState[value] + 1,
    }));
  };

  // countTotalFeedback = () =>
  //   Object.values(this.state).reduce((acc, total) => acc + total, 0);

  //   countPositiveFeedbackPercentage = () =>
  //     Math.round(
  //       (this.state.good / this.countTotalFeedback()) * 100
  //     )

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;
    const positiveFeedbackPercentage = Math.round((good / totalFeedback) * 100);
    const options = Object.keys(this.state);

    return (
      <div className={s.container}>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.increment}
          ></FeedbackOptions>
        </Section>

        {totalFeedback > 0 ? (
          <Section title={'Statistics'}>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positiveFeedbackPercentage}
            ></Statistics>
          </Section>
        ) : (
          <Notification message={'No feedback given'} />
        )}
      </div>
    );
  }
}
