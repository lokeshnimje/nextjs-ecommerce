"use client";

import { useCart } from "@/context/CartProvider";
import styles from '../../styles/Cart.module.css';
import Link from 'next/link'

export default function CartPage() {
  const { cart, updateQuantity } = useCart();

  return (
    <div className={styles.cartContainer}>
      <h2>Your Cart</h2>
      {cart.length > 0 ? (
        <>
          <table className={styles.cartTable}>
            <thead>
              <tr>
                <th>S no.</th>
                <th>Title</th>
                <th>Price ($)</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, i) => (
                <tr key={item.id}>
                  <td>{i + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.price.toFixed(2)}</td>
                  <td>
                    <div className={styles.quantityContainer}>
                      <button className={styles.quantityBtn}
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                      <div>{item.quantity}</div>
                      
                      <button className={styles.quantityBtn}
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link href="/checkout" className={styles.checkoutButton}>Proceed to Checkout</Link>
        </>
      ) : (
        <h3>Your Cart is empty!</h3>
      )}
    </div>
  );
}
