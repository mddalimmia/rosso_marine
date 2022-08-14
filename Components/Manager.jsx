import Link from "next/link";
import axios from "axios";
import React, { useState } from "react";
import styles from "../styles/manager.module.css";
import { AiFillRead, AiTwotoneEdit, AiFillDelete } from "react-icons/ai";

const Post = ({ management }) => {
  const [query, setQuery] = useState();
  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`${process.env.BASE_URL}/api/data/${id}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.input}>
          <input
            type="text"
            placeholder="search...."
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div>
          {management
            .filter(
              (managedData) =>
                managedData.blno.includes(query) ||
                managedData.containerno.includes(query)
            )
            .map((managedData) => {
              return (
                <div key={managedData._id} className={styles.container}>
                  <div className={styles.wrapper}>
                    <div className={styles.top}>
                      <h3>B/L: {managedData.blno}</h3>
                      <h4>Container No: {managedData.containerno}</h4>
                    </div>
                    <div className={styles.information}>
                      <div className={styles.depurture}>
                        From <br />
                        <h5> {managedData.originlocation}</h5>
                        <h6>{managedData.origindeparturedate}</h6>
                        <h6>{managedData.origindeparturetime}</h6>
                      </div>
                      <div className={styles.arrival}>
                        To <br />
                        <h4> {managedData.destinationlocation}</h4>
                        <h5>{managedData.destinationarrivaldate}</h5>
                        <h6>{managedData.destinationarrivaltime}</h6>
                      </div>
                    </div>
                    <div className={styles.btn}>
                      <Link href={`/track/${managedData._id}`}>
                        <button className={styles.button1}>View Details</button>
                      </Link>
                      <Link href={`/admin/edit/${managedData._id}`}>
                        <button className={styles.button3}>Edit</button>
                      </Link>
                      <button
                        className={styles.button2}
                        onClick={() => handleDelete(managedData._id)}
                      >
                        Delete
                      </button>
                    </div>
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
