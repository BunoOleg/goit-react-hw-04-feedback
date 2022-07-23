import styles from './FeedbackOptions.module.css';

export default function FeedbackOptions({buttonsName, onLeaveFeedback}) {
  const btn = buttonsName.map((el, index) => 
    {return (<button  
      className={styles.btn} 
      name={el} 
      key={index} 
      onClick={onLeaveFeedback}>
      {el}</button>)})  
  return (<div>{btn}</div>)
}