import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/login.module.css";
const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const handleClick = async () => {
    try {
      await axios.post(`${process.env.BASE_URL}/api/login`, {
        username,
        password,
      });
      router.push("/admin");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Admin Dasboard</h1>
        <input
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={styles.loginButton} onClick={() => handleClick()}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
