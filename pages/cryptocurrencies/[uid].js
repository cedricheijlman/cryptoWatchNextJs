import React from "react";
import styles from "./CryptoInfo.module.css";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import TagIcon from "@mui/icons-material/Tag";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import BoltIcon from "@mui/icons-material/Bolt";
import millify from "millify";
import HTMLReactParser from "html-react-parser";
import { Line } from "react-chartjs-2";

const cryptoInfoPage = ({ id, coinInfo, coinHistory }) => {
  console.log(coinHistory);
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.history?.length; i++) {
    coinPrice.push(coinHistory.history[i].price);
    coinTimestamp.push(
      new Date(coinHistory.history[i].timestamp).toLocaleDateString()
    );
  }

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price in USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };

  return (
    <div className={styles.container}>
      <img src={coinInfo.iconUrl} />
      <h2>
        {coinInfo.name} ({coinInfo.symbol}) Price
      </h2>
      <p>
        {coinInfo.name} live price in US dollars. View value statistics, market
        cap and supply
      </p>
      <Line data={data} />
      <div className={styles.valueStatistics}>
        <h2>{coinInfo.name} Value Statistics</h2>
        <p className={styles.valueStatistics__title}>
          An overview showing the stats of {coinInfo.name}
        </p>
        <div className={styles.valueInfo}>
          <div className={styles.itemLeft}>
            <MonetizationOnOutlinedIcon />
            <h5>Price to USD</h5>
          </div>
          <p>${millify(coinInfo.price)}</p>
        </div>
        <div className={styles.valueInfo}>
          <div className={styles.itemLeft}>
            <TagIcon />
            <h5>Rank</h5>
          </div>
          <p>{coinInfo.rank}</p>
        </div>
        <div className={styles.valueInfo}>
          <div className={styles.itemLeft}>
            <BoltIcon />
            <h5>24H Volume</h5>
          </div>
          <p>{millify(coinInfo["24hVolume"])}</p>
        </div>
        <div className={styles.valueInfo}>
          <div className={styles.itemLeft}>
            <MonetizationOnOutlinedIcon />
            <h5>Market Cap</h5>
          </div>
          <p>{millify(coinInfo.marketCap)}</p>
        </div>
        <div className={styles.valueInfo}>
          <div className={styles.itemLeft}>
            <EmojiEventsOutlinedIcon />
            <h5>All Time High</h5>
          </div>
          <p>{millify(coinInfo.allTimeHigh.price)}</p>
        </div>
        <div className={styles.description}>
          <h1>What is {coinInfo.name}?</h1>
          {HTMLReactParser(coinInfo.description)}
        </div>
      </div>
    </div>
  );
};

export default cryptoInfoPage;

export async function getServerSideProps(context) {
  const { params } = context;
  const { uid } = params;

  const res = await fetch(`https://api.coinranking.com/v2/coin/${uid}`, {
    method: "GET",
    headers: {
      "x-access-token": process.env.API_KEY,
    },
  });

  const coinInfo = await res.json();

  const res2 = await fetch(
    `https://api.coinranking.com/v2/coin/${uid}/history`,
    {
      method: "GET",
      headers: {
        "x-access-token": process.env.API_KEY,
      },
    }
  );

  const coinHistory = await res2.json();

  return {
    props: {
      id: uid,
      coinInfo: coinInfo.data.coin,
      coinHistory: coinHistory.data,
    },
  };
}
