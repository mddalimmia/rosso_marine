import axios from "axios";
import React from "react";
import { useState } from "react";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/navbar";
import styles from "../../styles/dataentry.module.css";

const Index = () => {
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

  const handleCreate = async () => {
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
      await axios.post(`${process.env.BASE_URL}/api/data`, newData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1>Enter your B/L / Container Data</h1>
        <div className={styles.mode}>
          <div>
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
          <div className={styles.generalInfo}>
            <h2>General Information</h2>
            <div className={styles.generalInfoWrapper}>
              <div>
                <label>B/L No.</label>
                <input type="text" onChange={(e) => setBlno(e.target.value)} />
              </div>
              <div>
                <label>Container No.</label>
                <input
                  type="text"
                  onChange={(e) => setContainerno(e.target.value)}
                />
              </div>
              <div>
                <label>Booking Date</label>
                <input
                  type="text"
                  onChange={(e) => setBooked(e.target.value)}
                />
              </div>
              <div>
                <label>Vessel/Voyage Name: </label>
                <input
                  type="text"
                  onChange={(e) => setVesselname(e.target.value)}
                />
              </div>
              <div>
                <label>Route: </label>
                <input type="text" onChange={(e) => setRoute(e.target.value)} />
              </div>
              <div>
                <label>Service Term</label>
                <input
                  type="text"
                  onChange={(e) => setServiceterm(e.target.value)}
                />
              </div>
              <div>
                <label>Weight</label>
                <input
                  type="text"
                  onChange={(e) => setWeight(e.target.value)}
                />
              </div>
              <div>
                <label>Cntr/Type:</label>
                <input
                  type="text"
                  onChange={(e) => setCntrtype(e.target.value)}
                />
              </div>
              <div>
                <label>Cell No.</label>
                <input
                  type="text"
                  onChange={(e) => setCellno(e.target.value)}
                />
              </div>
              <div>
                <label>Seal No.</label>
                <input
                  type="text"
                  onChange={(e) => setSealno(e.target.value)}
                />
              </div>
              <div>
                <label>Sender Company:</label>
                <input
                  type="text"
                  onChange={(e) => setSendercompany(e.target.value)}
                />
              </div>
              <div>
                <label>Reciever Company:</label>
                <input
                  type="text"
                  onChange={(e) => setRecievercompany(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <h2>Location</h2>
              </div>
              <div>
                <label>Origin</label>
                <input
                  type="text"
                  onChange={(e) => setOriginlocation(e.target.value)}
                />
              </div>
              <div>
                <label>Loading Port</label>
                <input
                  type="text"
                  onChange={(e) => setLoadinglocation(e.target.value)}
                />
              </div>
              <div>
                <label>Discharging Port</label>
                <input
                  type="text"
                  onChange={(e) => setDischargelocation(e.target.value)}
                />
              </div>
              <div>
                <label>Destination</label>
                <input
                  type="text"
                  onChange={(e) => setDestinationlocation(e.target.value)}
                />
              </div>
            </div>
            <div>
              <div>
                <h2>Arrival Time</h2>
              </div>
              <div>
                <label>At Loading</label>
                <input
                  type="text"
                  onChange={(e) => setLoadingarrivaldate(e.target.value)}
                  placeholder="Date"
                />
                <input
                  type="text"
                  onChange={(e) => setLoadingarrivaltime(e.target.value)}
                  placeholder="Time"
                />
              </div>
              <div>
                <label>At Discharging</label>
                <input
                  type="text"
                  onChange={(e) => setDischargearrivaldate(e.target.value)}
                  placeholder="Date"
                />
                <input
                  type="text"
                  onChange={(e) => setDischargearrivaltime(e.target.value)}
                  placeholder="Time"
                />
              </div>
              <div>
                <label>At Destination</label>
                <input
                  type="text"
                  onChange={(e) => setDestinationarrivaldate(e.target.value)}
                  placeholder="Date"
                />
                <input
                  type="text"
                  onChange={(e) => setDestinationarrivaltime(e.target.value)}
                  placeholder="Time"
                />
              </div>
              <div>
                <div>
                  <h2>Departure Time</h2>
                </div>
                <div>
                  <label>From Origin</label>
                  <input
                    type="text"
                    onChange={(e) => setOrigindeparturedate(e.target.value)}
                    placeholder="Date"
                  />
                  <input
                    type="text"
                    onChange={(e) => setOrigindeparturetime(e.target.value)}
                    placeholder="Time"
                  />
                </div>
                <div>
                  <label>From Loading</label>
                  <input
                    type="text"
                    onChange={(e) => setLoadingdeparturedate(e.target.value)}
                    placeholder="Date"
                  />
                  <input
                    type="text"
                    onChange={(e) => setLoadingdeparturetime(e.target.value)}
                    placeholder="Time"
                  />
                </div>
                <div>
                  <label>From Disharge </label>
                  <input
                    type="text"
                    placeholder="Optional Date"
                    onChange={(e) => setDischargedeparturedate(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Optional Time"
                    onChange={(e) => setDischargedeparturetime(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <div>
                  <h2>Container Return</h2>
                </div>
                <div>
                  <label>Date Time </label>
                  <input
                    type="text"
                    placeholder="Date"
                    onChange={(e) => setReturncontainerdate(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Time"
                    onChange={(e) => setReturncontainertime(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <div>
                  <h2>ISO Standard Time</h2> <h5>Arrival Time</h5>
                </div>
                <div>
                  <label>At Loading Port </label>
                  <input
                    type="text"
                    placeholder="e.g:2022-12-12T14:20"
                    onChange={(e) => setLoadarrivaliso(e.target.value)}
                  />
                </div>
                <div>
                  <label>At Discharging Port </label>
                  <input
                    type="text"
                    placeholder="e.g:2022-12-12T14:20"
                    onChange={(e) => setDischargearrivaliso(e.target.value)}
                  />
                </div>

                <div>
                  <label>At Destination </label>
                  <input
                    type="text"
                    placeholder="e.g:2022-12-12T14:20"
                    onChange={(e) => setDestinationarrivaliso(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <h5>Depurture Time</h5>
              </div>
              <div>
                <label> From Origin</label>
                <input
                  type="text"
                  placeholder="e.g:2022-12-12T14:20"
                  onChange={(e) => setOrigindepurtureiso(e.target.value)}
                />
              </div>
              <div>
                <label> From Loading Port </label>
                <input
                  type="text"
                  placeholder="e.g:2022-12-12T14:20"
                  onChange={(e) => setLoaddepurtureiso(e.target.value)}
                />
              </div>
              <div>
                <label> From Discharging Port </label>
                <input
                  type="text"
                  placeholder="e.g:2022-12-12T14:20"
                  onChange={(e) => setDischargedepurtureiso(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div>
            <div>
              <h5>Container Returned</h5>
            </div>
            <div>
              <label> Return Date Time </label>
              <input
                type="text"
                placeholder="e.g:2022-12-12T14:20"
                onChange={(e) => setReturnContainerdateiso(e.target.value)}
              />
            </div>
            <div></div>

            <div></div>
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
        <button onClick={handleCreate}>Upload</button>
      </div>
      <Footer />
    </>
  );
};

export default Index;
