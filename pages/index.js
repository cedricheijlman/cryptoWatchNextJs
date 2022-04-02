import Axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import CryptoList from "../components/homepage/cryptoList";
import GlobalStats from "../components/homepage/globalStats";
import styles from "../styles/Home.module.css";

export default function Home({ items, globalStats }) {
  if (!items) {
    return <h1>Loading...</h1>;
  }
  console.log(items);
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Global Crypto Stats</h1>
      </div>
      <GlobalStats globalStats={globalStats} />
      <div className={styles.subTitle}>
        <h1>Top 10 Cryptocurrencies </h1>
      </div>
      <CryptoList items={items.data} />
    </div>
  );
}

export async function getStaticProps(context) {
  const response = await fetch(
    "https://api.coinranking.com/v2/coins?orderBy=marketCap&limit=10",
    {
      method: "GET",
      headers: {
        "x-access-token": process.env.API_KEY,
      },
    }
  );

  const data = await response.json();

  const globalResponse = await fetch("https://api.coinranking.com/v2/stats", {
    method: "GET",
    headers: {
      "x-access-token": process.env.API_KEY,
    },
  });

  const data2 = await globalResponse.json();

  return {
    props: { items: data, globalStats: data2 }, // will be passed to the page component as props
  };
}
