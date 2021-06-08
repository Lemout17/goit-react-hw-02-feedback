import s from './Section.module.scss';

export default function Section({ title, children }) {
  return (
    <div className={s.container}>
      <h2 className={s.title}>{title}</h2>
      {children}
    </div>
  );
}
