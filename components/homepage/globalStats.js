import React from "react";
import styles from "../../styles/Home.module.css";

const GlobalStats = () => {
  return (
    <div className={styles.globalContainer}>
      <div className={styles.infoContainer}>
        <p>Total Coins</p>
        <h5>42,222</h5>
      </div>
      <div className={styles.infoContainer}>
        <p>Total Exchanges</p>
        <h5>373</h5>
      </div>
      <div className={styles.infoContainer}>
        <p>Total Markets</p>
        <h5>2.3T</h5>
      </div>
      <div className={styles.infoContainer}>
        <p>Total Market Cap</p>
        <h5>44.44k</h5>
      </div>
    </div>
  );
};

export default GlobalStats;
