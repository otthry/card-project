// _app.tsx
import type { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@/components/AppBar";
import Footer from "@/components/Footer";
import styles from "./index.module.css"

const App = (props: AppProps) => {
  const { Component, pageProps } = props;

  return (
    <>
      <CssBaseline />
      <AppBar />

      <main className={styles.main}>
      <Component {...pageProps} />
          </main>
      <Footer />
    </>
  );
};

export default App;