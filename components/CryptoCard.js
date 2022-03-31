import Link from "next/link";
import React from "react";
import styles from "../styles/CryptoCard.module.css";

const CryptoCard = ({ name, image, price, marketCap, dailyChange, id }) => {
  return (
    <Link href={`/cryptocurrencies/${id}`}>
      <div className={styles.card}>
        <div className={styles.title}>
          <h5>1. {name}</h5>
          <img width={35} height={35} src={image} alt="logo" />
        </div>
        <p>Price: {price}</p>
        <p>Market cap: {marketCap}B</p>
        <p>Daily Change: {dailyChange}%</p>
      </div>
    </Link>
  );
};

export default CryptoCard;
