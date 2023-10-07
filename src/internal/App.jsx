import { useState } from 'react';
import { useSelector } from 'react-redux';
import { AppRoutes } from '../rotes';
import { isPlayingContext } from '../hooks/IsPlaying';
import { tokenContext } from '../hooks/token';
import { BarPlayer } from './components/bar/BarPlayer';
import { Test } from './Test';
// import { useGetFavoritePlaylistQuery } from '../services/favoritePlaylist';
// import { refreshingToken } from '../api';

export const logOut = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('refresh');
  window.location.reload();
};

export const App = () => {
  const [isLoadTrack, setIsLoadTrack] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('refresh'));
  const selectTrack = useSelector((state) => state.selectTrack.selectTrack);
  const userName = useSelector((state) => state.userName.userName);
  const [playlist, setPlaylist] = useState(null);

  // const refteshToken = localStorage.getItem('refresh');
  // refreshingToken(refteshToken);

  // useGetFavoritePlaylistQuery();

  return (
    <tokenContext.Provider value={{ token, setToken }}>
      <isPlayingContext.Provider value={{ isPlaying, setIsPlaying }}>
        <AppRoutes user={userName} setPlaylist={setPlaylist} token={token} />
        {selectTrack != null ? (
          <BarPlayer
            isLoadTrack={isLoadTrack}
            setIsLoadTrack={setIsLoadTrack}
            playlist={playlist}
            setPlaylist={setPlaylist}
          />
        ) : null}
        <Test />
      </isPlayingContext.Provider>
    </tokenContext.Provider>
  );
};
