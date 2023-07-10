import * as React from "react";
import "@/styles/globals.css";
import Layout from "@/components/Layout";
import Switch from "@mui/material/Switch";
import Box from "@mui/material/Box";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Switch />
      </Box>
      <Component {...pageProps} />
    </Layout>
  );
}
