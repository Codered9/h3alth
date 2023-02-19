import Head from "next/head";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { useEffect } from "react";
import getAuth from "../auth/getArcanaAuth";
import { Button } from "primereact/button";
import { Panel } from 'primereact/panel';
import { useAuth } from "@arcana/auth-react";
import UploadFile from "@/components/UploadFile";
export default function Index() {
  const { user, connect, isLoggedIn, loading, loginWithSocial, provider } =
    useAuth();
  const auth = useAuth();

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
      <Panel header="H3alth">
        <p className="m-0">
          Welcome to H3alth Home Page. Here you can upload your medical reports to decentralised storage. <br/>
          Below this panel you can see file upload menu using which you can upload files. <br/>
          At the bottom right you can see your Arcana Wallet which contains all your assets, NFTs, past acitivity and Logout button to exit the session.
        </p>
      </Panel>
      {isLoggedIn ? (
        ""
      ) : (
        <Button label="Connect" raised onClick={onConnectClick} />
      )}
      {isLoggedIn ? user && <UploadFile auth={auth} /> : ""}
    </>
  );
}
