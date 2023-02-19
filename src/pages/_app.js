import '@/styles/globals.css'
import { AuthProvider } from '@arcana/auth';
import { ProvideAuth } from '@arcana/auth-react';
// import { getAuth } from "../auth/getArcanaAuth";

const auth = new AuthProvider(process.env.NEXT_PUBLIC_ARCANA_APP_ID, {
  theme: "light", 
});

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";     
export default function App({ Component, pageProps }) {
  return  <ProvideAuth provider={auth}>
  <Component {...pageProps} />
  </ProvideAuth>
}
