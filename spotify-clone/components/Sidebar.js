import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  RssIcon,
} from '@heroicons/react/outline';
import { HeartIcon } from '@heroicons/react/solid';
import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import playlistIdState from '../atoms/playlistAtom';
import { useRecoilState } from 'recoil';
import useSpotify from '../hooks/useSpotify';

function Sidebar() {
  const spotifyApi = useSpotify();
  const { data: session, status } = useSession();
  const [playlists, setPlaylists] = useState([]);
  const [playlistId, setPlaylistId] = useRecoilState(playlistIdState);

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists().then((data) => {
        setPlaylists(data.body.items);
      });
    }
  }, [session, spotifyApi]);

  return (
    <div className='hidden h-screen min-h-screen overflow-y-scroll  border-r border-gray-900 bg-[#121212] p-5 pb-36 text-xs text-gray-500 sm:max-w-[12rem] md:inline-flex lg:max-w-[15rem] lg:text-sm'>
      <div className='space-y-4'>
        {/* <button
          className='flex items-center justify-center space-x-2 border px-[24px] py-[12px] rounded-3xl border-[#18D860] hover:bg-[#18D860] hover:text-black'
          onClick={() => signOut()}
        >
          <p>Logout</p>
        </button> */}
        <button className='flex items-center justify-center space-x-2 hover:text-white'>
          <HomeIcon className='h-5 w-5' />
          <p>Home</p>
        </button>
        <button className='flex items-center justify-center space-x-2 hover:text-white'>
          <SearchIcon className='h-5 w-5' />
          <p>Search</p>
        </button>
        <button className='flex items-center justify-center space-x-2 hover:text-white'>
          <LibraryIcon className='h-5 w-5' />
          <p>Your Library</p>
        </button>
        <hr className='border-t-[0.1px] border-gray-900' />

        <button className='flex items-center justify-center space-x-2 hover:text-lime-600'>
          <PlusCircleIcon className='h-5 w-5' />
          <p>Create Playist</p>
        </button>
        <button className='flex items-center justify-center space-x-2 hover:text-red-500'>
          <HeartIcon className='h-5 w-5 ' />
          <p>Liked Songs</p>
        </button>
        <button className='flex items-center justify-center space-x-2 hover:text-cyan-600'>
          <RssIcon className='h-5 w-5' />
          <p>Your episodes</p>
        </button>
        <hr className='border-t-[0.1px] border-gray-900' />
        {playlists.map((playlist) => (
          <p
            key={playlist.id}
            onClick={() => setPlaylistId(playlist.id)}
            className='cursor-pointer hover:text-white'
          >
            {playlist.name}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
