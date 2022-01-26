import Head from 'next/head';
import Sidebar from '../components/Sidebar';
import Center from '../components/Center';

import { getSession } from 'next-auth/react';

export default function Home() {
  return (
    <div className='h-screen overflow-hidden bg-black'>
      <Head>
        <title>Spotify Clone</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='flex'>
        <Sidebar />
        <Center />
      </main>
      <div></div>
    </div>
  );
}

export async function getServerSideProps(context: { req: any; }){
  const session = await getSession({ req: context.req });
  return {
    props: {
      session
    }
  }
}