import React, { useState, useEffect }from 'react';
import useSpotify from '../hooks/useSpotify';
import useSongInfo from '../hooks/useSongInfo';
import { useSession } from 'next-auth/react';
import { useRecoilState } from 'recoil';
import { currentTrackIdState, isPlayingState } from '../atoms/songAtom';

function Player() {
  const spotifyApi = useSpotify();
  const { data: session, status } = useSession();
  const [currentTrackId, setCurrentTrackId] =
    useRecoilState(currentTrackIdState);
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
  const [volume, setVolume] = useState()
  const songInfo = useSongInfo()
  return (
    <div className='text-white'>
      <div>
        <img 
        className='hidden md:inline h-10 w-10'
        src={songInfo?.album.images?.[0]?.url} alt='' />
      </div>
    </div>
  );
}

export default Player;
