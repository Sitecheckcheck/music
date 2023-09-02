/* eslint-disable */
import { useState } from 'react';
import AppRoutes from '../rotes';
import { UserNameContext } from '../contexts/userName';
import { selectTrackContext } from '../contexts/selectTrack';
import { isPlayingContext } from '../contexts/IsPlaying';

function App() {
  const [isLoad, setIsLoad] = useState(true);

  const [userName, setUserName] = useState(localStorage.getItem('user'));
  const [selectTrack, setSelectTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <isPlayingContext.Provider value={{ isPlaying, setIsPlaying }}>
      <selectTrackContext.Provider value={{ selectTrack, setSelectTrack }}>
        <UserNameContext.Provider value={{ userName, setUserName }}>
          <AppRoutes isLoad={isLoad} setIsLoad={setIsLoad} user={userName} />
        </UserNameContext.Provider>
      </selectTrackContext.Provider>
    </isPlayingContext.Provider>
  );
}

export default App;
