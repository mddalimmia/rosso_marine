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
        <input
          type="text"
          placeholder="search...."
          onChange={(e) => setQuery(e.target.value)}
        />
        <div>
          {management
            .filter((managedData) => managedData.blno.includes(query))
            .map((manageData) => {
              return (
                <div key={manageData._id} className={styles.box}>
                  <h3>B/L: {manageData.blno}</h3>
                  <h4>Container No: {manageData.containerno}</h4>
                  <button onClick={() => handleDelete(manageData._id)}>
                    Delete
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Post;
