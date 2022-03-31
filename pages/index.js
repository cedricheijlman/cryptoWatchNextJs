import Axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import CryptoList from "../components/homepage/cryptoList";
import GlobalStats from "../components/homepage/globalStats";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Global Crypto Stats</h1>
      </div>
      <GlobalStats />
      <div className={styles.subTitle}>
        <h1>Top 10 Cryptocurrencies </h1>
      </div>
      <CryptoList />
    </div>
  );
}
