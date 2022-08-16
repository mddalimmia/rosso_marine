import axios from "axios";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import Footer from "../../../Components/Footer";
import Navbar from "../../../Components/navbar";
import styles from "../../../styles/edit.module.css";

const Index = ({ editData }) => {
  const router = useRouter();
  const [mode, setMode] = useState();
  const [containerno, setContainerno] = useState();
  const [booked, setBooked] = useState();
  const [blno, setBlno] = useState();
  const [vesselname, setVesselname] = useState();
  const [route, setRoute] = useState();
  const [serviceterm, setServiceterm] = useState();
  const [weight, setWeight] = useState();
  const [cntrtype, setCntrtype] = useState();
  const [originlocation, setOriginlocation] = useState();
  const [loadinglocation, setLoadinglocation] = useState();
  const [dischargelocation, setDischargelocation] = useState();
  const [destinationlocation, setDestinationlocation] = useState();
  const [loadingarrivaldate, setLoadingarrivaldate] = useState();
  const [loadingarrivaltime, setLoadingarrivaltime] = useState();
  const [dischargearrivaldate, setDischargearrivaldate] = useState();
  const [dischargearrivaltime, setDischargearrivaltime] = useState();
  const [destinationarrivaldate, setDestinationarrivaldate] = useState();
  const [destinationarrivaltime, setDestinationarrivaltime] = useState();
  const [origindeparturedate, setOrigindeparturedate] = useState();
  const [origindeparturetime, setOrigindeparturetime] = useState();
  const [loadingdeparturedate, setLoadingdeparturedate] = useState();
  const [loadingdeparturetime, setLoadingdeparturetime] = useState();
  const [dischargedeparturedate, setDischargedeparturedate] = useState();
  const [dischargedeparturetime, setDischargedeparturetime] = useState();
  const [loadarrivaliso, setLoadarrivaliso] = useState();
  const [dischargearrivaliso, setDischargearrivaliso] = useState();
  const [destinationarrivaliso, setDestinationarrivaliso] = useState();
  const [origindepurtureiso, setOrigindepurtureiso] = useState();
  const [loaddepurtureiso, setLoaddepurtureiso] = useState();
  const [dischargedepurtureiso, setDischargedepurtureiso] = useState();
  const [returncontainerdate, setReturncontainerdate] = useState();
  const [returncontainertime, setReturncontainertime] = useState();
  const [returncontainerdateiso, setReturnContainerdateiso] = useState();
  const [cellno, setCellno] = useState();
  const [sealno, setSealno] = useState();
  const [sendercompany, setSendercompany] = useState();
  const [recievercompany, setRecievercompany] = useState();
  const [usams, setUsams] = useState();
  const [canadaaci, setCanadaaci] = useState();
  const [euens, setEuens] = useState();
  const [chinacams, setChinacams] = useState();
  const [japanafr, setJapanafr] = useState();

  const handleEdit = async (_id) => {
    try {
      const newData = {
        mode,
        blno,
        containerno,
        booked,
        vesselname,
        route,
        serviceterm,
        cntrtype,
        weight,
        cellno,
        sealno,
        sendercompany,
        recievercompany,
        originlocation,
        loadinglocation,
        dischargelocation,
        destinationlocation,
        loadingarrivaldate,
        loadingarrivaltime,
        dischargearrivaldate,
        dischargearrivaltime,
        destinationarrivaldate,
        destinationarrivaltime,

        origindeparturedate,
        origindeparturetime,

        loadingdeparturedate,
        loadingdeparturetime,
        dischargedeparturedate,
        dischargedeparturetime,

        returncontainerdate,
        returncontainertime,
        loadarrivaliso,
        dischargearrivaliso,
        destinationarrivaliso,
        origindepurtureiso,
        loaddepurtureiso,
        dischargedepurtureiso,
        returncontainerdateiso,
        usams,
        canadaaci,
        euens,
        chinacams,
        japanafr,
      };
      await axios.put(`/api/data/${_id}`, newData);
      router.push("/admin/manage");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1>Edit your B/L / Container Data</h1>
        <div className={styles.mode}>
          <h5>Select Shipping Mode</h5>
          <div>
            <input
              type="radio"
              value="voyage"
              checked={mode === "voyage"}
              onChange={(e) => setMode(e.target.value)}
            />
            Voyage
          </div>
          <div>
            <input
              type="radio"
              value="vessel"
              checked={mode === "vessel"}
              onChange={(e) => setMode(e.target.value)}
            />
            Vessel
          </div>
        </div>
        <div>
          <h2>General Information</h2>
          <div className={styles.generalInfo}>
            <div className={styles.info}>
              <label>
                <h3>B/L No.</h3>
              </label>
              <input
                type="text"
                defaultValue={editData.blno}
                onChange={(e) => setBlno(e.target.value)}
              />
            </div>
            <div className={styles.info}>
              <label>
                <h3>Container No.</h3>
              </label>
              <input
                type="text"
                defaultValue={editData.containerno}
                onChange={(e) => setContainerno(e.target.value)}
              />
            </div>
            <div className={styles.info}>
              <label>
                <h3>Booking Date</h3>
              </label>
              <input
                defaultValue={editData.booked}
                type="text"
                onChange={(e) => setBooked(e.target.value)}
              />
            </div>
            <div className={styles.info}>
              <label>
                <h3>Vessel/Voyage Name:</h3>
              </label>
              <input
                type="text"
                defaultValue={editData.vesselname}
                onChange={(e) => setVesselname(e.target.value)}
              />
            </div>
            <div className={styles.info}>
              <label>
                <h3>Route: </h3>
              </label>
              <input
                type="text"
                defaultValue={editData.route}
                onChange={(e) => setRoute(e.target.value)}
              />
            </div>
            <div className={styles.info}>
              <label>
                <h3>Service Term</h3>
              </label>
              <input
                type="text"
                defaultValue={editData.serviceterm}
                onChange={(e) => setServiceterm(e.target.value)}
              />
            </div>
            <div className={styles.info}>
              <label>
                <h3>Weight</h3>
              </label>
              <input
                type="text"
                defaultValue={editData.weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div className={styles.info}>
              <label>
                <h3>Cntr/Type:</h3>
              </label>
              <input
                type="text"
                defaultValue={editData.cntrtype}
                onChange={(e) => setCntrtype(e.target.value)}
              />
            </div>
            <div className={styles.info}>
              <label>
                <h3>Cell No.</h3>
              </label>
              <input
                type="text"
                defaultValue={editData.cellno}
                onChange={(e) => setCellno(e.target.value)}
              />
            </div>
            <div className={styles.info}>
              <label>
                <h3>Seal No.</h3>
              </label>
              <input
                type="text"
                defaultValue={editData.sealno}
                onChange={(e) => setSealno(e.target.value)}
              />
            </div>
            <div className={styles.info}>
              <label>
                <h3>Sender Company:</h3>
              </label>
              <input
                type="text"
                defaultValue={editData.sendercompany}
                onChange={(e) => setSendercompany(e.target.value)}
              />
            </div>
            <div className={styles.info}>
              <label>
                <h3>Reciever Company:</h3>
              </label>
              <input
                type="text"
                defaultValue={editData.recievercompany}
                onChange={(e) => setRecievercompany(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div>
          <div className={styles.locationWrapper}>
            <div className={styles.location}>
              <h2>Location</h2>
            </div>
            <div className={styles.location}>
              <label>
                <h3>Origin</h3>
              </label>
              <input
                type="text"
                defaultValue={editData.originlocation}
                onChange={(e) => setOriginlocation(e.target.value)}
              />
            </div>
            <div className={styles.location}>
              <label>
                <h3>Loading Port</h3>
              </label>
              <input
                type="text"
                defaultValue={editData.loadinglocation}
                onChange={(e) => setLoadinglocation(e.target.value)}
              />
            </div>
            <div className={styles.location}>
              <label>
                <h3>Discharging Port</h3>
              </label>
              <input
                type="text"
                defaultValue={editData.dischargelocation}
                onChange={(e) => setDischargelocation(e.target.value)}
              />
            </div>
            <div className={styles.location}>
              <label>
                <h3>Destination</h3>
              </label>
              <input
                type="text"
                defaultValue={editData.destinationlocation}
                onChange={(e) => setDestinationlocation(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.arrivalWrapper}>
            <div className={styles.arrival}>
              <h2>Arrival Time</h2>
            </div>
            <div className={styles.arrival}>
              <label>
                <h3>At Loading</h3>
              </label>
              <input
                type="date"
                defaultValue={editData.loadingarrivaldate}
                onChange={(e) => setLoadingarrivaldate(e.target.value)}
                placeholder="Date"
              />
              <input
                type="time"
                defaultValue={editData.loadingarrivaltime}
                onChange={(e) => setLoadingarrivaltime(e.target.value)}
                placeholder="Time"
              />
            </div>
            <div className={styles.arrival}>
              <label>
                <h3>At Discharging</h3>
              </label>
              <input
                type="date"
                defaultValue={editData.dischargearrivaldate}
                onChange={(e) => setDischargearrivaldate(e.target.value)}
                placeholder="Date"
              />
              <input
                type="time"
                defaultValue={editData.dischargearrivaltime}
                onChange={(e) => setDischargearrivaltime(e.target.value)}
                placeholder="Time"
              />
            </div>
            <div className={styles.arrival}>
              <label>
                <h3>At Destination</h3>
              </label>
              <input
                type="date"
                defaultValue={editData.destinationarrivaldate}
                onChange={(e) => setDestinationarrivaldate(e.target.value)}
                placeholder="Date"
              />
              <input
                type="time"
                defaultValue={editData.destinationarrivaltime}
                onChange={(e) => setDestinationarrivaltime(e.target.value)}
                placeholder="Time"
              />
            </div>
            <div className={styles.departureWrapper}>
              <div className={styles.depurture}>
                <h2>Departure Time</h2>
              </div>
              <div className={styles.departure}>
                <label>
                  <h3>From Origin</h3>
                </label>
                <input
                  type="date"
                  defaultValue={editData.origindeparturedate}
                  onChange={(e) => setOrigindeparturedate(e.target.value)}
                  placeholder="Date"
                />
                <input
                  type="time"
                  defaultValue={editData.origindeparturetime}
                  onChange={(e) => setOrigindeparturetime(e.target.value)}
                  placeholder="Time"
                />
              </div>
              <div className={styles.departure}>
                <label>
                  <h3>From Loading</h3>
                </label>
                <input
                  type="date"
                  defaultValue={editData.loadingdeparturedate}
                  onChange={(e) => setLoadingdeparturedate(e.target.value)}
                  placeholder="Date"
                />
                <input
                  type="time"
                  defaultValue={editData.loadingdeparturetime}
                  onChange={(e) => setLoadingdeparturetime(e.target.value)}
                  placeholder="Time"
                />
              </div>
              <div className={styles.departure}>
                <label>
                  <h3>From Disharge</h3>
                </label>
                <input
                  type="date"
                  defaultValue={editData.dischargedeparturedate}
                  placeholder="Optional Date"
                  onChange={(e) => setDischargedeparturedate(e.target.value)}
                />
                <input
                  type="time"
                  defaultValue={editData.dischargedeparturetime}
                  placeholder="Optional Time"
                  onChange={(e) => setDischargedeparturetime(e.target.value)}
                />
              </div>
            </div>
            <div className={styles.returnWrapper}>
              <div className={styles.return}>
                <h2>Container Return</h2>
              </div>
              <div className={styles.return}>
                <label>Date Time </label>
                <input
                  type="date"
                  defaultValue={editData.returncontainerdate}
                  placeholder="Date"
                  onChange={(e) => setReturncontainerdate(e.target.value)}
                />
                <input
                  type="time"
                  defaultValue={editData.returncontainertime}
                  placeholder="Time"
                  onChange={(e) => setReturncontainertime(e.target.value)}
                />
              </div>
            </div>
            <div className={styles.isoWrapper}>
              <div className={styles.iso}>
                <h1>ISO Standard Time</h1> <h2>Arrival Time</h2>
              </div>
              <div className={styles.iso}>
                <label>
                  <h3>At Loading Port</h3>
                </label>
                <input
                  type="datetime-local"
                  min="2022-08-15T00:00"
                  defaultValue={editData.loadarrivaliso}
                  placeholder="e.g:2022-12-12T14:20"
                  onChange={(e) => setLoadarrivaliso(e.target.value)}
                />
              </div>
              <div className={styles.iso}>
                <label>
                  <h3>At Discharging Port</h3>
                </label>
                <input
                  type="datetime-local"
                  min="2022-08-15T00:00"
                  defaultValue={editData.dischargearrivaliso}
                  placeholder="e.g:2022-12-12T14:20"
                  onChange={(e) => setDischargearrivaliso(e.target.value)}
                />
              </div>

              <div className={styles.iso}>
                <label>
                  <h3>At Destination</h3>
                </label>
                <input
                  type="datetime-local"
                  min="2022-08-15T00:00"
                  defaultValue={editData.destinationarrivaliso}
                  placeholder="e.g:2022-12-12T14:20"
                  onChange={(e) => setDestinationarrivaliso(e.target.value)}
                />
              </div>
            </div>
            <div className={styles.iso}>
              <h2>Depurture Time</h2>
            </div>
            <div className={styles.iso}>
              <label>
                <h3>From Origin</h3>
              </label>
              <input
                type="datetime-local"
                min="2022-08-15T00:00"
                defaultValue={editData.origindepurtureiso}
                placeholder="e.g:2022-12-12T14:20"
                onChange={(e) => setOrigindepurtureiso(e.target.value)}
              />
            </div>
            <div className={styles.iso}>
              <label>
                <h3>From Loading Port</h3>
              </label>
              <input
                type="datetime-local"
                min="2022-08-15T00:00"
                defaultValue={editData.loaddepurtureiso}
                placeholder="e.g:2022-12-12T14:20"
                onChange={(e) => setLoaddepurtureiso(e.target.value)}
              />
            </div>
            <div className={styles.iso}>
              <label>
                <h3>From Discharging Port</h3>
              </label>
              <input
                type="datetime-local"
                min="2022-08-15T00:00"
                defaultValue={editData.dischargedepurtureiso}
                placeholder="e.g:2022-12-12T14:20"
                onChange={(e) => setDischargedepurtureiso(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className={styles.returnisoWrapper}>
          <div className={styles.returniso}>
            <h2>Container Returned</h2>
          </div>
          <div className={styles.returniso}>
            <label>
              <h3>Return Date Time</h3>
            </label>
            <input
              type="datetime-local"
              min="2022-08-15T00:00"
              defaultValue={editData.returncontainerdateiso}
              placeholder="e.g:2022-12-12T14:20"
              onChange={(e) => setReturnContainerdateiso(e.target.value)}
            />
          </div>
        </div>

        <div>
          <h2>Customs Status</h2>
          <div>
            <input
              type="radio"
              value="Filed"
              name="usams"
              checked={usams === "Filed"}
              onChange={(e) => setUsams(e.target.value)}
            />
            US/AMS
          </div>
          <div>
            <input
              type="radio"
              name="canadaaci"
              value="Filed"
              checked={canadaaci === "Filed"}
              onChange={(e) => setCanadaaci(e.target.value)}
            />
            Canada/ACI
          </div>
          <div>
            <input
              type="radio"
              value="Filed"
              name="euens"
              checked={euens === "Filed"}
              onChange={(e) => setEuens(e.target.value)}
            />
            EU/ENS
          </div>
          <div>
            <input
              name="chinacams"
              type="radio"
              value="Filed"
              checked={chinacams === "Filed"}
              onChange={(e) => setChinacams(e.target.value)}
            />
            China/CAMS
          </div>
          <div>
            <input
              type="radio"
              name="japanafr"
              value="Filed"
              checked={japanafr === "Filed"}
              onChange={(e) => setJapanafr(e.target.value)}
            />
            Japan/AFR
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <button
            className={styles.btn}
            onClick={() => handleEdit(editData._id)}
          >
            Update
          </button>
          <button
            className={styles.btn2}
            onClick={() => {
              router.push("/admin");
            }}
          >
            Go to Dashboard
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Index;
export async function getServerSideProps({ params }) {
  const res = await axios.get(`${process.env.BASE_URL}/api/data/${params._id}`);
  const editData = res.data;
  return {
    props: { editData },
  };
}
