import React from 'react';
import { getProviders, signIn } from 'next-auth/react';

function Login({ providers }) {
  return (
    <div className='flex flex-col space-y-6 items-center justify-center bg-black min-h-screen w-full'>
      <img
        className='w-52 mb-5'
        src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png'
        alt=''
      />

      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            className='bg-[#18D860] text-black p-5 rounded-full hover:bg-black border-[#18D860] border hover:text-[#18D860]'
            onClick={() => signIn(provider.id, { callbackUrl: '/' })}
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
