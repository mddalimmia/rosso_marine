import Link from "next/link";
import React from "react";
import styles from "../styles/post.module.css";
import { useState } from "react";
const Post = ({ information }) => {
  const [query, setQuery] = useState("");
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.input}>
          <input
            type="text"
            placeholder="Enter Your B/L No."
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className={styles.postContainer}>
          {information
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
            })}
        </div>
      </div>
    </div>
  );
};

export default Post;
