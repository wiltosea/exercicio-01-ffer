import styles from './sidebar.module.scss';

const sidebarContent = [
  {
    id: 1,
    title: 'Section 1',
    href: '/',
  },
  {
    id: 2,
    title: 'Another Link',
    href: '/another-link',
  },
  {
    id: 3,
    title: 'Yet Another Link',
    href: '/yet-another-link',
  },
  {
    id: 4,
    title: 'One More Link',
    href: '/one-more-link',
  },
];
export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <ul>
        {sidebarContent.map((item) => (
          <li key={item.id}>
            <a href={item.href}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
