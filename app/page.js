import styles from '../styles/Home.module.css';

export default function HomePage() {
  return (
    <div className={styles.homeContainer}>
      <h2>Welcome to My E-commerce Store</h2>
      <a className={styles.shopLink} href="/products">Shop Now</a>
    </div>
  );
}
