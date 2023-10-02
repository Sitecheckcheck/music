import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Nav } from '../nav/Nav';
import { MainSidebar, SidebarPersonal } from '../sidebar/styles';
import SMain from '../main/mainStyle';
import { MyTracksCenterBlock } from './mytrackcenterblock';
import { logOut } from '../../App';
import { selectTrackFunction } from '../../../store/sliceSelectTrack';
import exit from '../../../img/exit.svg';

export const MyTrackMain = () => {
  let userName = useSelector((state) => state.userName.userName);
  const dispatch = useDispatch();

  if (userName) {
    const index = userName.lastIndexOf('@');
    userName = userName.substring(0, index);
  }

  return (
    <SMain>
      <Nav />
      <MyTracksCenterBlock />
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
      </MainSidebar>
    </SMain>
  );
};
