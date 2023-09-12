/* eslint-disable */
import { useState } from 'react';
import AppRoutes from '../rotes';
import { UserNameContext } from '../contexts/userName';
import { selectTrackContext } from '../contexts/selectTrack';
import { isPlayingContext } from '../contexts/IsPlaying';
import { tokenContext } from '../contexts/token';
import { logOutContext } from '../contexts/LogOut'

function App() {
  const [isLoad, setIsLoad] = useState(true);
  const [userName, setUserName] = useState(localStorage.getItem('user'));
  const [selectTrack, setSelectTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [token, setToken] = useState(null);

  const logOut = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('refresh');
  };

  return (
  <logOutContext.Provider value={{logOut}}>
      <tokenContext.Provider value={{ token, setToken }}>
        <isPlayingContext.Provider value={{ isPlaying, setIsPlaying }}>
          <selectTrackContext.Provider value={{ selectTrack, setSelectTrack }}>
            <UserNameContext.Provider value={{ userName, setUserName }}>
              <AppRoutes
                isLoad={isLoad}
                setIsLoad={setIsLoad}
                user={userName}
              />
            </UserNameContext.Provider>
          </selectTrackContext.Provider>
        </isPlayingContext.Provider>
      </tokenContext.Provider>
    </logOutContext.Provider>
  );
}

export default App;
