import React from "react";
import styles from "../../styles/footer.module.css";
import footerLogo from "../../public/Logo.svg";
import Image from "next/image";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.buttonWrapper}>
          <div className={styles.buttonContainer}>
            <button className={styles.callButton}>Call</button>
            <button className={styles.writeButton}>Write</button>
          </div>
          <div className={styles.logo}>
            <Image src={footerLogo} width="120px" height="110px" alt="" />
          </div>
        </div>
        <div className={styles.midContainer}>
          <div>
            <h6>ROSSO</h6>
            <p>About Company</p>
            <p>History and Achievements</p>
            <p>Career</p>
          </div>

          <div>
            <h6>SERVICES</h6>
            <p>Send Cargov</p>
            <p>Track The Cargo</p>
            <p>Services and Services</p>
          </div>
          <div>
            <h6>FLEET</h6>
            <p>Fleet</p>
            <p>Transport Ships</p>
            <p>Ferries</p>
            <p>Auxiliary Vessels</p>
          </div>
          <div>
            <h6>INFORMATION</h6>
            <p>Press Center</p>
            <p>Shareholders and Investors</p>
            <p>Reports and Presentations</p>
          </div>
          <div>
            <h6>Working Conditions</h6>
            <p>Evaluation of VWorking Conditions</p>
          </div>
          <div>
            <h6>EXTERNAL LINKS</h6>
            <p>Instagram</p>
          </div>
        </div>
        <div className={styles.copyrightContainer}>
          <div>
            <p>Maintained by ROSSO Shipment</p>
          </div>
          <div>
            <p className={styles.rights}>
              &copy;2003-2022, All Copyrights Reserved
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
