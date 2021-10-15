import React from "react";
import Head from "next/head";
import {
  AppBar,
  Tookbar,
  Toolbar,
  Typography,
  Container,
} from "@material-ui/core";
import useStyles from "../utils/styles";

export default function Layout({ children }) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Tienda Chayito</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography>Tienda Chayito</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>Tienda Chayito. Todos los derechos resevados.</Typography>
      </footer>
    </div>
  );
}
