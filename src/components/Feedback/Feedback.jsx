import {useReducer} from 'react';
import styles from './Feedback.module.css';

import Statistic from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Notification from '../Notification';
import Section from '../Section';

const initialState = {goodCoffee: 0, neutralCoffee:0, badCoffee:0};

function reducer (state, action) {
  switch (action.type) {
    case 'Good':
      return {...state, goodCoffee:state.goodCoffee + action.payloade};
    case 'Neutral':
      return {...state, neutralCoffee:state.neutralCoffee + action.payloade};
    case 'Bad':
      return {...state, badCoffee:state.badCoffee + action.payloade};
    default:
      throw new Error();
  }
} 

const Feedback = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChangeStats = event => dispatch({type: event.target.name, payloade: 1});

  const countTotalFeedback = () => state.goodCoffee + state.neutralCoffee + state.badCoffee;

  const countPositiveFeedbackPercentage = () => 
    countTotalFeedback() 
      ? Math.round(state.goodCoffee/countTotalFeedback()*100) 
      : "0"; 

  const buttons = ['Good', 'Neutral', 'Bad'];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Please leave feedback</h1>
      <FeedbackOptions
        buttonsName={buttons}
        onLeaveFeedback={handleChangeStats}
      />
      <Section 
        title="Statistics"
        >        
        {countTotalFeedback() ? 
          <Statistic 
            good={state.goodCoffee} 
            neutral={state.neutralCoffee}
            bad={state.badCoffee}
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