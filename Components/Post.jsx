import Link from "next/link";
import React from "react";
import styles from "../styles/post.module.css";

const Post = ({ postData }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <h3>B/L: {postData.blno}</h3>
          <h4>Container No: {postData.containerno}</h4>
        </div>
        <div className={styles.information}>
          <div className={styles.depurture}>
            From <br />
            <h5> {postData.originlocation}</h5>
            <h6>{postData.origindeparturedate}</h6>
            <h6>{postData.origindeparturetime}</h6>
          </div>
          <div className={styles.arrival}>
            To <br />
            <h4> {postData.destinationlocation}</h4>
            <h5>{postData.destinationarrivaldate}</h5>
            <h6>{postData.destinationarrivaltime}</h6>
          </div>
        </div>
        <div className={styles.btn}>
          <Link href={`/track/${postData._id}`}>
            <button className={styles.button}>View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
