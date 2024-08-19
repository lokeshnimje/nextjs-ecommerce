'use client';

import { CartProvider } from "@/context/CartProvider";
import "./globals.css";
import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <header>
            <h1>My E-commerce Store</h1>
          </header>
          <main className="main-container">
            <div className="side-bar">
              <Link className="menu" href="/">Home</Link>
              <Link className="menu" href="/products">Products</Link>
              <Link className="menu" href="/cart">Cart</Link>
              <Link className="menu" href="/checkout">Checkout</Link>
            </div>
            <div className="children-container">
              {children}
            </div>
          </main>
          <footer>© 2024 My E-commerce Store</footer>
        </CartProvider>
      </body>
    </html>
  );
}
