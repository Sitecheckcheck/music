/* eslint-disable */
import React from 'react';
import Nav from '../nav/Nav';
import CenterBlock from '../centerblock/CenterBlock';
import Sidebar from '../sidebar/Sidebar';
import SMain from './mainStyle';

// export const NameUser = React.createContext(localStorage.getItem('user'));

function Main({ isLoad, setIsLoad, selectTrack, setSelectTrack }) {
  
  // let user = useContext(NameUser);
  // if (user) {
  //   const index = user.lastIndexOf('@');
  //   user = user.substring(0, index);
  // }

  return (
    // <NameUser.Provider value={user || ''}>
      <SMain>
        <Nav />
        <CenterBlock
          isLoad={isLoad}
          setIsLoad={setIsLoad}
          selectTrack={selectTrack}
          setSelectTrack={setSelectTrack}
        />
        <Sidebar isLoad={isLoad} playlist />
      </SMain>
    // </NameUser.Provider>
  );
}

export default Main;
