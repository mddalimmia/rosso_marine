import "../styles/globals.css";
import { useState, useEffect } from "react";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }) {
  const [showing, setShowing] = useState(false);
  useEffect(() => {
    return () => {
      setShowing(true);
    };
  }, []);
  if (!showing) {
    return null;
  }
  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    );
  }
}

export default MyApp;
