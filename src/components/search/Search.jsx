import styles from './search.module.scss';

export function Search() {
  return (
    <div className={styles.search}>
      <input type="search" placeholder="Search..." />
    </div>
  );
}
