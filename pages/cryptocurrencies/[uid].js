import React from "react";

const cryptoInfoPage = ({ id, coinInfo }) => {
  console.log(coinInfo);
  return <div>CryptoInfoPage</div>;
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

  return {
    props: {
      id: uid,
      coinInfo: coinInfo.data.coin,
    },
  };
}
