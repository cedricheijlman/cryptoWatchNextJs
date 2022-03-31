import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <h2>Crypto Watch</h2>
      <ul>
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/cryptocurrencies">
          <li>Cryptocurrencies</li>
        </Link>
        <Link href="/exchanges">
          <li>Exchanges</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
