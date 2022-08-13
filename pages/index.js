import Head from "next/head";
import axios from "axios";
import Link from "next/link";
import styles from "../styles/home.module.css";
import Navbar from "../Components/navbar";
import Post from "../Components/Post";
import Footer from "../Components/Footer";
import { useState, useEffect } from "react";

export default function Home({ information }) {
  const [query, setQuery] = useState("");
  const [post, setPost] = useState();
  useEffect(() => {
    return () => {
      query === null
        ? setPost("")
        : setPost(
            information
              .filter((informationData) => informationData.blno.includes(query))
              .map((informationData) => {
                return (
                  <div key={informationData._id}>
                    <h3>B/L: {informationData.blno}</h3>
                    <h4>Container No: {informationData.containerno}</h4>

                    <div className={styles.information}>
                      <div className={styles.depurture}>
                        From <br />
                        <h5> {informationData.originlocation}</h5>
                        <h6>{informationData.origindeparturedate}</h6>
                        <h6>{informationData.origindeparturetime}</h6>
                      </div>
                      <div className={styles.arrival}>
                        To <br />
                        <h4> {informationData.destinationlocation}</h4>
                        <h5>{informationData.destinationarrivaldate}</h5>
                        <h6>{informationData.destinationarrivaltime}</h6>
                      </div>
                    </div>
                    <div className={styles.btn}>
                      <Link href={`/track/${informationData._id}`}>
                        <button className={styles.button}>View Details</button>
                      </Link>
                    </div>
                  </div>
                );
              })
          );
    };
  }, []);
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
          <post />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export async function getServerSideProps() {
  const res = await axios.get(`${process.env.BASE_URL}/api/data`);
  const information = res.data;
  return {
    props: {
      information,
    },
  };
}
