import React from "react";
import Link from "next/link";
import Manager from "../../Components/Manager";
import axios from "axios";
import styles from "../../styles/manage.module.css";
import Navbar from "../../Components/navbar";
import Footer from "../../Components/Footer";
const Manage = ({ manager }) => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.manageContainer}>
          <h1>Manage Your Shipment</h1>
        </div>
        <Manager management={manager} />
      </div>
      <Footer />
    </>
  );
};

export default Manage;
export async function getServerSideProps(ctx) {
  const myCookie = ctx.req?.cookies || "";
  if (myCookie.token !== process.env.TOKEN) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    };
  }
  const res = await axios.get(`${process.env.BASE_URL}/api/data`);
  const manager = res.data;
  return {
    props: {
      manager,
    },
  };
}
