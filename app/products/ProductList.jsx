'use client';
import { useCart } from '@/context/CartProvider';
import styles from '../../styles/Products.module.css';

export default function ProductsList({ products }) {
  const { addToCart, cart } = useCart();
  const isInCart = (productId) => {
    return cart.some(item => item.id === productId);
  };
  return (
    <>
      {products.map(product => (
        <div key={product.id} className={styles.productCard}>
          <h3>{product.title}</h3>
          <img src={product.image} alt={product.title} width={100} height={100} />
          <div>
            <a href={`/products/${product.id}`}>View Details</a>
            <button disabled={isInCart(product.id)} style={isInCart(product.id) ? {backgroundColor: '#828282'} : {}} onClick={() => addToCart(product)}>
            {isInCart(product.id) ? 'Already in Cart' : 'Add to Cart'}
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
