import { NavLink } from 'react-router-dom';
import { Nav } from '../nav/Nav';
import { MainSidebar, SidebarPersonal } from '../sidebar/styles';
import SMain from '../main/mainStyle';
import { ListindiCenterBlock } from './listindicenterblock';

export const ListindiMain = () => (
  <SMain>
    <Nav />
    <ListindiCenterBlock />
    <MainSidebar>
      <SidebarPersonal>
        <NavLink to="/mytrack">Sergey.Ivanov</NavLink>
        <div />
      </SidebarPersonal>
    </MainSidebar>
  </SMain>
);
