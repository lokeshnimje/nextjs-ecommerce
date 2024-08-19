import styles from '../../styles/Products.module.css';
import ProductsList from './ProductList';

export default async function ProductsPage() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();

  return (
    <div className={styles.productsContainer}>
      <ProductsList products={products} />
    </div>
  );
}
