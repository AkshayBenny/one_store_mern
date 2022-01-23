import React from 'react';

const AUTH_URL =
  'https://accounts.spotify.com/authorize?client_id=716c5b75beaa4677a08dcb2f0f7f062b&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state';

function Login() {
  return (
    <div className='flex'>
      <button className='px-[24px] py-[12px] rounded  bg-lime-600 text-neutral-100'>
        <a href={AUTH_URL}>Login with Spotify</a>
      </button>
    </div>
  );
}

export default Login;
