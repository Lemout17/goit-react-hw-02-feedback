import s from './FeedbackOptions.module.scss';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={s.container}>
      {options.map(option => (
        <button
          key={option}
          type="button"
          className={s.btn}
          onClick={onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
