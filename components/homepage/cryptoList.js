import React from "react";
import CryptoCard from "../CryptoCard";
import styles from "./CryptoList.module.css";

const CryptoList = () => {
  return (
    <div className={styles.container}>
      <CryptoCard />
      <CryptoCard />
      <CryptoCard />
      <CryptoCard />
      <CryptoCard />
      <CryptoCard />
      <CryptoCard />
      <CryptoCard />
    </div>
  );
};

export default CryptoList;
