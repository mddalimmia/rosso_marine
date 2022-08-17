import React from "react";
import styles from "../../styles/containerdetail.module.css";
import { useState, useEffect } from "react";
import { GiCargoShip } from "react-icons/gi";
import {
  MdLocalShipping,
  MdTripOrigin,
  MdNotificationsActive,
  MdLocationPin,
} from "react-icons/md";
import { RiNavigationFill } from "react-icons/ri";
import axios from "axios";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/navbar";
const ContainerPage = ({ containerData }) => {
  const modeType = containerData.mode;
  const date1 = Date.parse(containerData.origindepurtureiso);
  const date2 = Date.parse(containerData.loadarrivaliso);
  const date3 = Date.parse(containerData.loaddepurtureiso);
  const date4 = Date.parse(containerData.dischargearrivaliso);
  const date5 = Date.parse(containerData.dischargedepurtureiso);
  const date6 = Date.parse(containerData.destinationarrivaliso);
  const date7 = Date.parse(containerData.returncontainerdateiso);
  const [currlocation, setCurrlocation] = useState(null);
  const [currdescription, setCurrdescription] = useState(null);
  const [currdate, setCurrdate] = useState(null);
  const [currtime, setCurrtime] = useState(null);

  const [currIcon, setCurrIcon] = useState();

  useEffect(() => {
    modeType === "voyage"
      ? setCurrIcon(GiCargoShip)
      : setCurrIcon(MdLocalShipping);
  }, []);
  useEffect(() => {
    date7 <= Date.parse(new Date())
      ? (setCurrdescription("Empty Container Returned"),
        setCurrlocation(containerData.destinationlocation),
        setCurrdate(containerData.returncontainerdate),
        setCurrtime(containerData.returncontainertime),
        console.log(currdescription))
      : date6 <= Date.parse(new Date())
      ? (setCurrdescription("Vessel Arrived at Destination"),
        setCurrlocation(containerData.destinationlocation),
        setCurrdate(containerData.destinationarrivaldate),
        setCurrtime(containerData.destinationarrivaltime))
      : date5 <= Date.parse(new Date())
      ? (setCurrdescription("Vessel Depurtured From Discharging Port"),
        setCurrlocation(containerData.dischargelocation),
        setCurrdate(containerData.dischargedeparturedate),
        setCurrtime(containerData.dischargedeparturetime))
      : date4 <= Date.parse(new Date())
      ? (setCurrdescription("Vessel Arrived at Discharging Port"),
        setCurrlocation(containerData.dischargelocation),
        setCurrdate(containerData.dischargearrivaldate),
        setCurrtime(containerData.dischargearrivaltime))
      : date3 <= Date.parse(new Date())
      ? (setCurrdescription("Vessel Depurtured from Loading Port"),
        setCurrlocation(containerData.loadinglocation),
        setCurrdate(containerData.loadingdeparturedate),
        setCurrtime(containerData.loadingdeparturetime))
      : date2 <= Date.parse(new Date())
      ? (setCurrdescription("Vessel Arrived at Loading Port"),
        setCurrlocation(containerData.loadinglocation),
        setCurrdate(containerData.loadingarrivaldate),
        setCurrtime(containerData.loadingarrivaltime))
      : date1 <= Date.parse(new Date())
      ? (setCurrdescription("Vessel Depurtured from Origin"),
        setCurrlocation(containerData.originlocation),
        setCurrdate(containerData.origindeparturedate),
        setCurrtime(containerData.origindeparturetime))
      : setCurrdescription("Vessel Doesn't Departured Yet");
  }, []);
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.bltable}>
            <table>
              <tr>
                <th>B/L Number</th>
                <th>{containerData.blno}</th>
              </tr>
            </table>
            {currIcon}
          </div>
          <div className={styles.mode}></div>
          <div className={styles.timelineWrapper}>
            <div className={styles.timelinebody}>
              <div className={styles.notification}>
                <MdNotificationsActive className={styles.active} />
                <h3>{currdescription}</h3>
              </div>
              <div className={styles.timeline}>
                <div className={styles.dot}></div>
                <div className={styles.originData}>
                  <p>{containerData.originlocation}</p>
                </div>

                <div>
                  <MdTripOrigin className={styles.tripOrigin} />
                </div>
                <div>
                  <RiNavigationFill className={styles.sendPlane} />
                </div>
                <div className={styles.bar}></div>
                <div>
                  <MdLocationPin className={styles.locationButton} />
                </div>
                <div className={styles.dot}></div>
                <div className={styles.destinationData}>
                  <p>{containerData.destinationlocation}</p>
                </div>
              </div>
              <div className={styles.timetable}>
                <table>
                  <thead>
                    <tr>
                      <th></th>
                      <th>Origin</th>
                      <th>Loading Port</th>
                      <th>Discharging Port</th>
                      <th>Destination</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Location</td>
                      <td>{containerData.originlocation}</td>
                      <td>{containerData.loadinglocation}</td>
                      <td>{containerData.dischargelocation}</td>
                      <td>{containerData.destinationlocation}</td>
                    </tr>
                    <tr>
                      <td>Arrival</td>
                      <td></td>
                      <td>
                        {containerData.loadingarrivaldate} <br />
                        {containerData.loadingarrivaltime}
                      </td>
                      <td>
                        {containerData.dischargearrivaldate}
                        <br />
                        {containerData.dischargearrivaltime}
                      </td>
                      <td>
                        {containerData.destinationarrivaldate}
                        <br />
                        {containerData.destinationarrivaltime}
                      </td>
                    </tr>
                    <tr className={styles.departuretime}>
                      <td>Depurture</td>
                      <td>
                        {containerData.origindeparturedate}
                        <br />
                        {containerData.origindeparturetime}
                      </td>
                      <td>
                        {containerData.loadingdeparturedate} <br />
                        {containerData.loadingdeparturetime}
                      </td>
                      <td>
                        {containerData.dischargedeparturedate} <br />
                        {containerData.dischargedeparturetime}
                      </td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className={styles.continformation}>
            <div className={styles.contwrapper}>
              <table>
                <tr>
                  <th>Container No.</th>
                  <th>Cntr Type/Size</th>
                  <th>Weight</th>
                  <th>Cell No.</th>
                  <th>Service Term</th>
                  <th>Seal No.</th>
                </tr>
                <tr>
                  <td>{containerData.containerno}</td>
                  <td>{containerData.cntrtype}</td>
                  <td></td>
                  <td>{containerData.cellno}</td>
                  <td>{containerData.serviceterm}</td>
                  <td>{containerData.sealno}</td>
                </tr>
              </table>
            </div>
          </div>
          <div className={styles.currentlocation}>
            <div className={styles.currentLocationWrapper}>
              <h3>Current Location</h3>
              <div className={styles.locationtable}>
                <table>
                  <tr>
                    <th>Location</th>
                    <th>Date/Time</th>
                    <th>Status Description</th>
                  </tr>
                  <tr>
                    <td>{currlocation}</td>
                    <td>
                      {currdate}
                      <br />
                      {currtime}
                    </td>
                    <td>{currdescription}</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.movement}>
              <h2>Vessel Movement</h2>

              <div className={styles.movementTable}>
                <table>
                  <tr>
                    <th>Vessel/Voyage</th>
                    <th>Route</th>
                    <th>Loading Port</th>
                    <th>Depurture</th>
                    <th>Discharging Port</th>
                    <th>Arrival</th>
                  </tr>
                  <tr>
                    <td>{containerData.vesselname}</td>
                    <td>{containerData.route}</td>
                    <td>{containerData.loadinglocation}</td>
                    <td>
                      {containerData.loadingdeparturedate}
                      <br />
                      {containerData.loadingdeparturetime}
                    </td>
                    <td>{containerData.dischargelocation}</td>
                    <td>
                      {containerData.dischargearrivaldate}
                      <br />
                      {containerData.dischargearrivaltime}
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h3>Customs Status</h3>

              <div className={styles.nationItem}>
                <table>
                  <tr>
                    <th>Nation/Item</th>
                    <th>US/AMS</th>
                    <th>Canada/ACI</th>
                    <th>EU/ENS</th>
                    <th>China/CAMS</th>
                    <th>Japan/AFR</th>
                  </tr>
                  <tr>
                    <td>Status</td>
                    <td>{containerData.usams}</td>
                    <td>{containerData.canadaaci}</td>
                    <td>{containerData.euens}</td>
                    <td>{containerData.chinacams}</td>
                    <td>{containerData.japanafr}</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h2>Shipment Progress</h2>
            </div>
            <div className={styles.shipmentProgress}>
              <table>
                <tr>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Location</th>
                  <th>Status Description</th>
                </tr>
                <tr>
                  <td sx={{ padding: "0px 6px" }}>
                    {containerData.origindeparturedate}
                  </td>
                  <td> {containerData.origindeparturetime}</td>
                  <td>{containerData.originlocation}</td>
                  <td>Vessel Depurtured from Origin</td>
                </tr>
                <tr>
                  <td>{containerData.loadingarrivaldate}</td>
                  <td> {containerData.loadingarrivaltime}</td>
                  <td>{containerData.loadinglocation}</td>
                  <td>Vessel Arrived at POL</td>
                </tr>
                <tr>
                  <td>{containerData.loadingdeparturedate}</td>
                  <td> {containerData.loadingdeparturetime}</td>
                  <td>{containerData.loadinglocation}</td>
                  <td>Vessel Depurtured from POL</td>
                </tr>
                <tr>
                  <td>{containerData.dischargearrivaldate}</td>
                  <td> {containerData.dischargearrivaltime}</td>
                  <td>{containerData.dischargelocation}</td>
                  <td>Vessel Arrived at Discharging Port</td>
                </tr>
                <tr>
                  <td>{containerData.destinationarrivaldate}</td>
                  <td> {containerData.destinationarrivaltime}</td>
                  <td>{containerData.destinationlocation}</td>
                  <td>Vessel Arrived at Destination</td>
                </tr>
                <tr>
                  <td>{containerData.returncontainerdate}</td>
                  <td> {containerData.returncontainertime}</td>
                  <td>{containerData.destinationlocation}</td>
                  <td>Empty Container Returned</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContainerPage;

export async function getServerSideProps({ params }) {
  const res = await axios.get(`${process.env.BASE_URL}/api/data/${params._id}`);
  const containerData = res.data;
  return {
    props: { containerData },
  };
}
