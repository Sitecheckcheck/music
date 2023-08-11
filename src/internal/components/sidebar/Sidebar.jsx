/* eslint-disable */
import { NavLink } from 'react-router-dom';
// import React, { useContext } from 'react';
import playlist01 from '../../../img/playlist01.png';
import playlist02 from '../../../img/playlist02.png';
import playlist03 from '../../../img/playlist03.png';
import playlist00 from '../../../img/playlist00.png';
import SidebarItem from './SidebarItem';
import { NameUser } from '../../pages/mainpage';
import {
  MainSidebar,
  SidebarPersonal,
  SidebarBlock,
  SidebarList,
} from './styles';

// export const UserContext = React.createContext({
//   user: null,
//   setCurrentUser: () => {},
// });

// export function useUserContext() {
//   const user = useContext(UserContext);

//   return user;
// }

function Sidebar({ isLoad }) {
  // const { user } = useUserContext();


  return (
    <MainSidebar>
      <NameUser.Consumer>
        {(name) => (
          <SidebarPersonal>
            <NavLink to="/mytrack">{name}</NavLink>
            <div />
          </SidebarPersonal>
        )}
      </NameUser.Consumer>
      <SidebarBlock>
        <SidebarList>
          <SidebarItem
            playlist={isLoad ? playlist00 : playlist01}
            page="playlist/3"
          />
          <SidebarItem
            playlist={isLoad ? playlist00 : playlist02}
            page="playlist/1"
          />
          <SidebarItem
            playlist={isLoad ? playlist00 : playlist03}
            page="playlist/2"
          />
        </SidebarList>
      </SidebarBlock>
    </MainSidebar>
  );
}

export default Sidebar;
