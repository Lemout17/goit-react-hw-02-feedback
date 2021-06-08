import s from './Notification.module.scss';

export default function Notification({ message }) {
  return <p className={s.text}>{message}</p>;
}
