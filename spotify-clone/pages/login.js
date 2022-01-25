import React from 'react';
import { getProviders, signIn } from 'next-auth/react';

function Login({ providers }) {
  return (
    <div className='flex flex-col items-center justify-center bg-black min-h-screen w-full'>
      <img
        className='w-52 mb-5'
        src='https://digital.hbs.edu/platform-digit/wp-content/uploads/sites/2/2020/04/spotify-logo-1920x1080-2.jpg'
        alt=''
      />

      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            className='bg-[#18D860] text-white p-5 rounded-lg'
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
