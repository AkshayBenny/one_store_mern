import React, { useState, useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { ChevronDownIcon } from '@heroicons/react/outline';
import { shuffle } from 'lodash';
import { useRecoilState } from 'recoil';
import { useRecoilValue } from 'recoil';
import playlistIdState, { playlistState } from '../atoms/playlistAtom';
import useSpotify from '../hooks/useSpotify';
import Songs from './Songs';

const colors = [
  'from-indigo-500',
  'from-blue-500',
  'from-green-500',
  'from-red-500',
  'from-yellow-500',
  'from-pink-500',
  'from-purple-500',
];
export default function Center() {
  const { data: session } = useSession();
  const spotifyApi = useSpotify();
  const [color, setColor] = useState(null);
  const playlistId = useRecoilValue(playlistIdState);
  const [playlist, setPlaylist] = useRecoilState(playlistState);

  console.log(playlist);

  useEffect(() => {
    setColor(shuffle(colors).pop());
  }, [playlistId]);

  useEffect(() => {
    spotifyApi
      .getPlaylist(playlistId)
      .then((data) => {
        setPlaylist(data.body);
      })
      .catch((err) => {
        console.log('Something went wrong>>>>>>>>>>>>', err);
      });
  }, [spotifyApi, playlistId]);
  return (
    <div className='h-screen  flex-grow overflow-y-scroll text-white'>
      <header className='absolute top-5 right-8' onClick={signOut}>
        <div className='flex cursor-pointer items-center space-x-3 rounded-full bg-black p-1 pr-2  text-white opacity-90 hover:opacity-80'>
          <img
            className='h-10 w-10 rounded-full object-cover object-center p-[1px]'
            src={session?.user.image}
            alt='dp'
          />
          <h2>{session?.user.name}</h2>
          <ChevronDownIcon className='h-5 w-5' />
        </div>
      </header>

      <section
        className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 p-8 text-white`}
      >
        <img
          className='shadow-2x1 h-44 w-44'
          src={playlist?.images?.[0]?.url}
          alt=''
        />
        <div>
          <p>PLAYLIST</p>
          <h1 className='text-2xl md:text-3xl xl:text-5xl'>{playlist?.name}</h1>
        </div>
      </section>
      <div>
        <Songs />
      </div>
    </div>
  );
}
