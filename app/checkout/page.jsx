'use client';
import { useCart } from "@/context/CartProvider";
import styles from "../../styles/Cart.module.css";
import { useState } from "react";
import OrderConfirmationModal from "@/components/OrderConfirmationModal";

export default function CheckoutPage() {

  const { cart, removeFromCart, setCart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setCart([])
  } 

  const getTotalAmount = () => {
    return cart.reduce((acc, int) => acc + int.price * int.quantity, 0);
  };
  return (
    <div>
      <h2>Checkout</h2>
      {cart.length > 0 ? (
        <>
          <table className={styles.cartTable}>
            <thead>
              <tr>
                <th>S no.</th>
                <th>Title</th>
                <th>Price ($)</th>
                <th>Quantity</th>
                <th>Total Price ($)</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, i) => (
                <tr key={item.id}>
                  <td>{i + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.price.toFixed(2)}</td>
                  <td>{item.quantity}</td>
                  <td>{(item.quantity * item.price).toFixed(2)}</td>
                  <td>
                    <button
                      className={styles.quantityBtn}
                      onClick={() => removeFromCart(item.id)}
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3>Total Amount: {getTotalAmount().toFixed(2)} $</h3>

          <button onClick={openModal} className={styles.checkoutButton}>
            Place Order
          </button>
          <OrderConfirmationModal isOpen={isModalOpen} onClose={closeModal}>
            <h2>Your Order is placed!</h2>
            <p>Thank you for shopping with us! <br/> I hope you enjoy the experience</p>
            <button onClick={closeModal}>Close</button>
          </OrderConfirmationModal>
        </>
      ) : (
        <>
          <h3>You have not selected any product to buy!</h3>
          <a className={styles.checkoutButton} href="/products">
            Shop Now
          </a>
        </>
      )}
    </div>
  );
}
