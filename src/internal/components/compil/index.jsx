import Nav from '../nav/Nav';
import { MainSidebar, SidebarPersonal } from '../sidebar/styles';
import SMain from '../main/mainStyle';
import CompilCenterBlock from './compilcenterblock';

function CompilMain() {
  return (
    <SMain>
      <Nav />
      <CompilCenterBlock />
      <MainSidebar>
        <SidebarPersonal>
          <p>Sergey.Ivanov</p>
          <div />
        </SidebarPersonal>
      </MainSidebar>
    </SMain>
  );
}

export default CompilMain;
