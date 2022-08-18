import Link from "next/link";
import React from "react";
import Image from "next/image";
import Logo from "../../public/Logo.svg";
import styles from "../../styles/Navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.navWrapper}>
        <div className={styles.navTop}>
          <ul>
            <Link href="/">
              <li>+7 (49529) 48-816</li>
            </Link>
            <Link href="/">
              <li>Rosso Shipping Company</li>
            </Link>
            <Link href="/">
              <li>Personal Area</li>
            </Link>
          </ul>
        </div>
        <div className={styles.navMid}>
          <div className={styles.logo}>
            <Link href="/">
              <Image
                src={Logo}
                width="100%"
                height="100%"
                alt=""
                className={styles.logoImage}
              />
            </Link>
          </div>
          <div className={styles.hamburger}>
            <GiHamburgerMenu className={styles.giMenu} />
          </div>
        </div>
        <div className={styles.navBottom}>
          <ul>
            <Link href="/">
              <li>Services and Services</li>
            </Link>
            <Link href="/">
              <li>Fleet</li>
            </Link>
            <Link href="/">
              <li>Rosso Company</li>
            </Link>
            <Link href="/">
              <li>Shareholders and Investors</li>
            </Link>
            <Link href="/">
              <li>Press Center</li>
            </Link>
            <Link href="/">
              <li>Our Contacts</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
