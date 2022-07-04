import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider initializeOnMount={false}>
      //initializeOnMount==false means that we are not connecting to a maralis
      //server, we are just using its hook
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
