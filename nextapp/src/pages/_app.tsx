// _app.tsx
import type { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@/components/AppBar";
import Footer from "@/components/Footer";

const App = (props: AppProps) => {
  const { Component, pageProps } = props;

  return (
    <>
      <CssBaseline />
      <AppBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default App;