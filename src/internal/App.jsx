import { useState } from 'react';
import { useSelector } from 'react-redux';
import { AppRoutes } from '../rotes';
import { isPlayingContext } from '../hooks/IsPlaying';
import { tokenContext } from '../hooks/token';
import { BarPlayer } from './components/bar/BarPlayer';
// import { fetchPlaylist } from '../store/slicePlaylist';
// import { fetchFavoritePlaylist } from '../store/sliceFavoritePlaylist';

export const logOut = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('refresh');
  window.location.reload();
};

export const App = () => {
  const [isLoadTrack, setIsLoadTrack] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [token, setToken] = useState(null);
  const selectTrack = useSelector((state) => state.selectTrack.selectTrack);
  const userName = useSelector((state) => state.userName.userName);
  const [playlist, setPlaylist] = useState(null)

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchPlaylist());
  // }, [dispatch]);

  return (
    <tokenContext.Provider value={{ token, setToken }}>
      <isPlayingContext.Provider value={{ isPlaying, setIsPlaying }}>
        <AppRoutes user={userName} setPlaylist={setPlaylist} />
        {selectTrack != null ? (
          <BarPlayer
            isLoadTrack={isLoadTrack}
            setIsLoadTrack={setIsLoadTrack}
            playlist={playlist}
            setPlaylist={setPlaylist}
          />
        ) : null}
      </isPlayingContext.Provider>
    </tokenContext.Provider>
  );
};
