import styles from './article.module.scss';
export function Article({ imageUrl, title, content }) {
  return (
    <div className={styles.container}>
      <img src={imageUrl} alt={imageUrl} />
      <div className={styles.content}>
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    </div>
  );
}
