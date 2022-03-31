import Axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";

export default function Home({ data }) {
  console.log(data);
  return (
    <div className={styles.container}>
      <div>
        <h1>All Cryptocurrencies</h1>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  try {
    const result = await Axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = result.data;
    return {
      props: {
        data: data,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
