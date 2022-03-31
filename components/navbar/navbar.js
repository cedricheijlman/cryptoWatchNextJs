import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <h2>CryptoWatch</h2>
      <ul>
        <li>Home</li>
        <li>Cryptocurrencies</li>
        <li>Exchanges</li>
      </ul>
    </nav>
  );
};

export default Navbar;
