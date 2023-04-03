import styles from './header.module.scss';

export default function Header() {
  return (
    <div className={styles.header}>
      <ul>
        <li>Section 1</li>
        <li>Section 2</li>
        <li>Section 3</li>
        <li>Section 4</li>
      </ul>
    </div>
  );
}
