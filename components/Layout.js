import React from "react";
import Head from "next/head";
import {
  AppBar,
  Tookbar,
  Toolbar,
  Typography,
  Container,
} from "@material-ui/core";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Tienda Chayito</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography>Tienda Chayito</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
      <footer>
        <Typography>Tienda Chayito. Todos los derechos resevados.</Typography>
      </footer>
    </div>
  );
}
