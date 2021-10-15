import { useEffect } from "react";
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
  return <Component {...pageProps} />;
}

export default MyApp;
