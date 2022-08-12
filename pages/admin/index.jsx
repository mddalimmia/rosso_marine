import React from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/admin.module.css";
import { AiFillHome, AiFillFileAdd, AiOutlineFileSearch } from "react-icons/ai";
import { FcManager } from "react-icons/fc";
import { BsClipboardData } from "react-icons/bs";
import Navbar from "../../Components/navbar";
import Footer from "../../Components/Footer";
const AdminPage = ({ info }) => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.containerWrapper}>
          <div className={styles.drawer}>
            <div className={styles.drawerWrapper}>
              <div className={styles.adminBanner}>
                <FcManager className={styles.fcmanager} />
                <h3>ADMIN</h3>
              </div>
              <div className={styles.dashboard}>
                <AiFillHome className={styles.aihome} />
                <p>Dashboard</p>
              </div>
              <div className={styles.addContainer}>
                <AiFillFileAdd className={styles.aiadd} />
                <Link href={`/admin/dataentry`}>
                  <p>New Shipment</p>
                </Link>
              </div>
              <div className={styles.manageShipment}>
                <BsClipboardData className={styles.clip} />
                <Link href={`/admin/manage`}>
                  <p>Manage Shipment </p>
                </Link>
              </div>
              <div className={styles.trackShipment}>
                <AiOutlineFileSearch className={styles.outline} />

                <p>Track Shipment</p>
              </div>
            </div>
          </div>
          <div className={styles.mainArea}>
            <table>
              <thead>
                <tr>
                  <th>B/L</th>
                  <th>Sender Company</th>
                  <th>Reciever Company</th>
                  <th>From</th>
                  <th>To</th>
                  <th>Booked On</th>
                </tr>
              </thead>
              <tbody>
                {info.map((information) => {
                  return (
                    <tr key={information._id}>
                      <td>{information.blno}</td>
                      <td>{information.sendercompany}</td>
                      <td>{information.recievercompany}</td>
                      <td>{information.originlocation}</td>
                      <td>{information.destinationlocation}</td>
                      <td>{information.booked}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminPage;
export const getServerSideProps = async (ctx) => {
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
  const info = res.data;
  return {
    props: {
      info,
    },
  };
};
