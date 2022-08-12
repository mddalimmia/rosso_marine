import Head from "next/head";
import axios from "axios";
import Link from "next/link";
import styles from "../styles/home.module.css";
import Navbar from "../Components/navbar";
import Post from "../Components/Post";
import Footer from "../Components/Footer";
import { useState, useEffect } from "react";
export default function Home({ info }) {
  const [query, setQuery] = useState("");
  return (
    <div className={styles.home}>
      <Head>
        <title>Rosso Shipment</title>
        <meta name="description" content="Rosso Shipment and Logistics" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={styles.homeWrapper}>
        <div className={styles.input}>
          <input
            type="text"
            placeholder="Enter Your B/L No."
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className={styles.postContainer}>
          {info
            .filter((information) => information.blno.includes(query))
            .map((information) => {
              return (
                <div key={information._id}>
                  <Link href={`/track/${information._id}`}>
                    <Post postData={information} />
                  </Link>
                </div>
              );
            })}
        </div>
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
