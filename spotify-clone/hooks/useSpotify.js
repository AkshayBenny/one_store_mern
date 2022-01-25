import React, { useState, useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import spotifyApi from '../lib/spotify';

function useSpotify() {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (session) {
      // If refresh acces token attempt fails, direct user to login page
      if (session.error === 'RefreshAccessTokenError') {
        signIn();
      }
      spotifyApi.setAccessToken(session.user.accessToken);
    }
  }, [session]);

  return spotifyApi;
}

export default useSpotify;
