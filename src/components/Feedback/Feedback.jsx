import {useState} from 'react';
import styles from './Feedback.module.css';

import Statistic from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Notification from '../Notification';
import Section from '../Section';

export const Feedback = () => {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const handleChangeStats = event => {
		const { name } = event.currentTarget;

		switch (name) {
			case 'good':
				setGood(good + 1);
				break;
			case 'neutral':
				setNeutral(neutral + 1);
				break;
			case 'bad':
				setBad(bad + 1);
				break;
			default:
				return;
		}
		countTotalFeedback();
		countPositiveFeedbackPercentage();
	};

	const countTotalFeedback = () => {
		return good + neutral + bad;
	};

	const countPositiveFeedbackPercentage = () => {
		return parseInt((good / countTotalFeedback()) * 100);
  };
  

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Please leave feedback</h1>
      <FeedbackOptions
        buttonsName={['good', 'neutral', 'bad']}
        onLeaveFeedback={handleChangeStats}
      />
      <Section 
        title="Statistics"
        >        
        {good !== 0 || neutral !== 0 || bad !== 0 ? 
          <Statistic 
            good={good} 
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}   
          />
        : <Notification message="There is no feedback"/>
        }
      </Section>
    </div>
   )
}

export default Feedback;