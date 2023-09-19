import { useState } from 'react';
import { useSelector } from 'react-redux';
import { AppRoutes } from '../rotes';
import { isPlayingContext } from '../hooks/IsPlaying';
import { tokenContext } from '../hooks/token';
import { BarPlayer } from './components/bar/BarPlayer';

export const logOut = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('refresh');
  window.location.reload();
};

export const App = () => {
  const [isLoad, setIsLoad] = useState(true);
  const [isLoadTrack, setIsLoadTrack] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [token, setToken] = useState(null);
  const selectTrack = useSelector((state) => state.selectTrack.selectTrack);
  const userName = useSelector((state) => state.userName.userName);

  return (
    <tokenContext.Provider value={{ token, setToken }}>
      <isPlayingContext.Provider value={{ isPlaying, setIsPlaying }}>
        <AppRoutes isLoad={isLoad} setIsLoad={setIsLoad} user={userName} />
        {selectTrack != null ? (
          <BarPlayer
            isLoadTrack={isLoadTrack}
            setIsLoadTrack={setIsLoadTrack}
          />
        ) : null}
      </isPlayingContext.Provider>
    </tokenContext.Provider>
  );
};
