import styles from './navbar.module.scss';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { Search } from '../search/Search';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.header}>
      <nav className={styles.navbar}>
        <h1 className={styles.brand}>Logo</h1>
        <Icon
          icon="ic:baseline-menu"
          className={styles.iconMenu}
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <div className={styles.menu}>
          <ul className={menuOpen ? styles.active : ''}>
            <li>
              <a href="/">Topic 1</a>
            </li>
            <li>
              <a href="/">Topic 2</a>
            </li>
            <li>
              <a href="/">Topic 3</a>
            </li>
            <li>
              <a href="/">Topic 4</a>
            </li>
          </ul>
          <Search />
        </div>
      </nav>
    </div>
  );
}
