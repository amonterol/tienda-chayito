import { SnackbarProvider } from "notistack";
import { useEffect } from "react";
import { StoreProvider } from "../utils/Store";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  //Para remover la renderizacion de estilos desde el servidor
  //en conjunto con la definicion en _document.js
  //Cambiaba el color del navbar al original no aceptando los nuevos estilos
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <SnackbarProvider anchorOrigin={{ vertical: "top", horizontal: "center" }}>
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    </SnackbarProvider>
  );
}
export default MyApp;
