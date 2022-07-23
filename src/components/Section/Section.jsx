import styles from './Section.module.css';

export default function Section({title, children}) {
  return (
    <div className={styles.section}>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  )
}