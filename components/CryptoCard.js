import React from "react";
import styles from "../styles/CryptoCard.module.css";

const CryptoCard = ({ name, image, price, marketCap, dailyChange }) => {
  return (
    <div className={styles.card}>
      <div className={styles.title}>
        <h5>1. {name}</h5>
        <img width={35} height={35} src="./images/logobitcoin.png" alt="logo" />
      </div>
      <p>Price: {price}</p>
      <p>Market cap: {marketCap}B</p>
      <p>Daily Change: {dailyChange}%</p>
    </div>
  );
};

export default CryptoCard;
