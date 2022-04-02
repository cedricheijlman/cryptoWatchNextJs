import Axios from "axios";
import React, { useEffect } from "react";
import CryptoCard from "../CryptoCard";
import styles from "./CryptoList.module.css";

const CryptoList = ({ items }) => {
  return (
    <div className={styles.container}>
      {items.coins.map((coin) => {
        return (
          <CryptoCard
            key={coin.uuid}
            name={coin.name}
            image={coin.iconUrl}
            marketCap={coin.marketCap}
            price={coin.price}
            dailyChange={coin.change}
            id={coin.uuid}
            rank={coin.rank}
          />
        );
      })}
    </div>
  );
};

export default CryptoList;
