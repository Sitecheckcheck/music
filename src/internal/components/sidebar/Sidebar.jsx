import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import exit from '../../../img/exit.svg';
import { logOut } from '../../App';
import { selectTrackFunction } from '../../../store/sliceSelectTrack';

function Sidebar({ isLoad, setIsLoad }) {
  let userName = useSelector((state) => state.userName.userName);
  const dispatch = useDispatch();

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
        <NavLink
          to="/signin"
          onClick={() => {
            logOut();
            dispatch(selectTrackFunction(null));
          }}
        >
          <img src={exit} alt="exit" />
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
