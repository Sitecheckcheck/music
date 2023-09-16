/* eslint-disable */
import { useState } from 'react';
import AppRoutes from '../rotes';
import { UserNameContext } from '../contexts/userName';
import { isPlayingContext } from '../contexts/IsPlaying';
import { tokenContext } from '../contexts/token';
import BarPlayer from './components/bar/BarPlayer';
import { useDispatch, useSelector } from 'react-redux';

export const logOut = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('refresh');
};

function App() {
  const [isLoad, setIsLoad] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [token, setToken] = useState(null);
  const selectTrack = useSelector(state => state.selectTrack.selectTrack )
  const userName = useSelector(state => state.userName.userName )
 


  return (
      <tokenContext.Provider value={{ token, setToken }}>
        <isPlayingContext.Provider value={{ isPlaying, setIsPlaying }}>
              <AppRoutes
                isLoad={isLoad}
                setIsLoad={setIsLoad}
                user={userName}
              />
              {selectTrack != null
                ? <BarPlayer isLoad={isLoad} />
                : null}
        </isPlayingContext.Provider>
      </tokenContext.Provider>
  );
}

export default App;
