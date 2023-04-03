import styles from './app.module.scss';
import Header from './components/header';
import Navbar from './components/nav';
import Sidebar from './components/sidebar';
import { Article } from './components/article';

function App() {
  return (
    <div className={styles.layout}>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.content}>
        <main className={styles.main}>
          <Article
            imageUrl="https://picsum.photos/200/200/"
            title="lorem"
            content="ipsum"
          />
          <Article
            imageUrl="https://picsum.photos/200/200/"
            title="lorem"
            content="ipsum"
          />
          <Article
            imageUrl="https://picsum.photos/200/200/"
            title="lorem"
            content="ipsum"
          />
        </main>
        <aside className={styles.sidebar}>
          <Sidebar />
        </aside>
      </div>
    </div>
  );
}

export default App;
