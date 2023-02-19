import Head from "next/head";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { useEffect } from "react";
import getAuth from "../auth/getArcanaAuth"
import { Button } from 'primereact/button';
import { useAuth } from "@arcana/auth-react";
export default function Index() {
  const { user, connect, isLoggedIn, loading, loginWithSocial, provider } = useAuth();

  const onConnectClick = async () => {
    try {
      await connect();
    } catch (e) {
      console.log(e);
    }
  };

  const onConnect = () => {
    console.log("connected");
  };
  useEffect(() => {
    provider.on("connect", onConnect);
    return () => {
      provider.removeListener("connect", onConnect);
    };
  }, [provider]);
  return (
    <>
      <Head>
        <title>H3alth</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Button label="Connect" raised onClick={onConnectClick}/>
    </>
  );
}
