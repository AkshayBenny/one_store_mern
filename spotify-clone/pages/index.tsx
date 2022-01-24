import Head from 'next/head';

import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Spotify Clone</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Sidebar />
      <h1>Hello world</h1>
    </div>
  );
}
