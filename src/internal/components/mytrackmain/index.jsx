import Nav from '../nav/Nav';
import { MainSidebar, SidebarPersonal } from '../sidebar/styles';
import SMain from '../main/mainStyle';
import MyTracksCenterBlock from './mytrackcenterblock/mytrackcenterblock';

function MyTrackMain() {
  return (
    <SMain>
      <Nav />
      <MyTracksCenterBlock />
      <MainSidebar>
        <SidebarPersonal>
          <p>Sergey.Ivanov</p>
          <div />
        </SidebarPersonal>
      </MainSidebar>
    </SMain>
  );
}

export default MyTrackMain;
