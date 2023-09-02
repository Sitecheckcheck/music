import { NavLink } from 'react-router-dom';
import Nav from '../nav/Nav';
import { MainSidebar, SidebarPersonal } from '../sidebar/styles';
import SMain from '../main/mainStyle';
import MyTracksCenterBlock from './mytrackcenterblock';
import { useUserNameContext } from '../../../contexts/userName';

function MyTrackMain({ isLoad, setIsLoad, selectTrack, setSelectTrack }) {
  const user = useUserNameContext();
  let { userName } = user;

  if (userName) {
    const index = userName.lastIndexOf('@');
    userName = userName.substring(0, index);
  }

  return (
    <SMain>
      <Nav />
      <MyTracksCenterBlock
        isLoad={isLoad}
        setIsLoad={setIsLoad}
        selectTrack={selectTrack}
        setSelectTrack={setSelectTrack}
      />
      <MainSidebar>
        <SidebarPersonal>
          <NavLink to="/mytrack">{userName}</NavLink>
          <div />
        </SidebarPersonal>
      </MainSidebar>
    </SMain>
  );
}

export default MyTrackMain;
