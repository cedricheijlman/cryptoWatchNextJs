import React from "react";
import styles from "../../styles/Home.module.css";
import millify from "millify";

const GlobalStats = ({ globalStats }) => {
  console.log(globalStats);
  return (
    <div className={styles.globalContainer}>
      <div className={styles.infoContainer}>
        <p>Total Coins</p>
        <h5>{millify(globalStats.data.totalCoins)}</h5>
      </div>
      <div className={styles.infoContainer}>
        <p>Total Exchanges</p>
        <h5>{millify(globalStats.data.totalExchanges)}</h5>
      </div>
      <div className={styles.infoContainer}>
        <p>Total Markets</p>
        <h5>{millify(globalStats.data.totalMarkets)}</h5>
      </div>
      <div className={styles.infoContainer}>
        <p>Total Market Cap</p>
        <h5>{millify(globalStats.data.totalMarketCap)}</h5>
      </div>
    </div>
  );
};

export default GlobalStats;
