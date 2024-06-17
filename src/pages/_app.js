import "../styles/globals.css";

import { useEffect } from "react";
import { Workbox } from "workbox-window";

function MyApp({ Component, pageProps }) {
     useEffect(() => {
          if ("serviceWorker" in navigator) {
               const wb = new Workbox("/sw.js");
               wb.register()
                    .then((registration) => {
                         console.log("Service worker registered:", registration);
                    })
                    .catch((error) => {
                         console.error("Service worker registration failed:", error);
                    });
          }
     }, []);

     return <Component {...pageProps} />;
}

export default MyApp;
