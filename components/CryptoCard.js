import React from "react";
import styles from "../styles/CryptoCard.module.css";

const CryptoCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.title}>
        <h5>1. Bitcoin</h5>
        <img width={35} height={35} src="./images/logobitcoin.png" alt="logo" />
      </div>
      <p>Price: 46.7K</p>
      <p>Market cap: 879.3B</p>
      <p>Daily Change: 5.3%</p>
    </div>
  );
};

export default CryptoCard;
