import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import playlist01 from '../../../img/playlist01.png';
import playlist02 from '../../../img/playlist02.png';
import playlist03 from '../../../img/playlist03.png';
import playlist00 from '../../../img/playlist00.png';
import SidebarItem from './SidebarItem';
import {
  MainSidebar,
  SidebarPersonal,
  SidebarBlock,
  SidebarList,
} from './styles';
import { useUserNameContext } from '../../../contexts/userName';
import exit from '../../../img/exit.svg'
import { useLogOutContext } from '../../../contexts/LogOut';

function Sidebar({ isLoad, setIsLoad }) {
  const user = useUserNameContext();
  let { userName } = user;

  const {logOut} = useLogOutContext();

  if (userName) {
    const index = userName.lastIndexOf('@');
    userName = userName.substring(0, index);
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoad(false);
    }, 500);
  });

  return (
    <MainSidebar>
      <SidebarPersonal>
        <NavLink to="/mytrack">{userName}</NavLink>
        <NavLink to="/signin" onClick={logOut}>
          <img src={exit} alt="exit"  />
        </NavLink>
      </SidebarPersonal>
      <SidebarBlock>
        <SidebarList>
          <SidebarItem
            playlist={isLoad ? playlist00 : playlist01}
            page="/playlist/3"
          />
          <SidebarItem
            playlist={isLoad ? playlist00 : playlist02}
            page="/playlist/1"
          />
          <SidebarItem
            playlist={isLoad ? playlist00 : playlist03}
            page="/playlist/2"
          />
        </SidebarList>
      </SidebarBlock>
    </MainSidebar>
  );
}

export default Sidebar;
