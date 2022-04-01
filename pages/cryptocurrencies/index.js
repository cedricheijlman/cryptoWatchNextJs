import React from "react";
import CryptoList from "../../components/homepage/cryptoList";
import styles from "./CryptocurrenciesPage.module.css";

const CryptocurrenciesPage = ({ coinsInfo }) => {
  console.log(coinsInfo);
  return (
    <div className={styles.container}>
      <h1>All cryptocurrencies</h1>
      <CryptoList items={coinsInfo.data} />
    </div>
  );
};

export default CryptocurrenciesPage;
export async function getServerSideProps(context) {
  const res = await fetch(`https://api.coinranking.com/v2/coins`, {
    method: "GET",
    headers: {
      "x-access-token": process.env.API_KEY,
    },
  });

  const coinsInfo = await res.json();

  return {
    props: {
      coinsInfo,
    },
  };
}
