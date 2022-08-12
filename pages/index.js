import Head from "next/head";
import axios from "axios";
import Link from "next/link";
import styles from "../styles/home.module.css";
import Navbar from "../Components/navbar";
import Post from "../Components/Post";
import Footer from "../Components/Footer";

export default function Home({ info }) {
  return (
    <div className={styles.home}>
      <Head>
        <title>Rosso Shipment</title>
        <meta name="description" content="Rosso Shipment and Logistics" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={styles.homeWrapper}>
        <Post information={info} />
      </div>
      <Footer />
    </div>
  );
}
export async function getServerSideProps() {
  const res = await axios.get(`${process.env.BASE_URL}/api/data`);
  const info = res.data;
  return {
    props: {
      info,
    },
  };
}
