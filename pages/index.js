import Axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Global Crypto Stats</h1>
      </div>
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
    </div>
  );
}
