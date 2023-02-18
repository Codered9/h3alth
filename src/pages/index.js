import Head from 'next/head'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";                                         
import { AuthProvider } from '@arcana/auth';
import { ProvideAuth } from '@arcana/auth-react';
import Login from '@/components/Login';

const provider = new AuthProvider(process.env.NEXT_PUBLIC_ARCANA_APP_ID)

export default function Home() {
  return (
    <>
      <Head>
        <title>H3alth</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProvideAuth provider={provider}>
        <Login />
      </ProvideAuth>
    </>
  )
}
