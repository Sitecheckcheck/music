import { NavLink } from 'react-router-dom';
import { Nav } from '../nav/Nav';
import { MainSidebar, SidebarPersonal } from '../sidebar/styles';
import SMain from '../main/mainStyle';
import List100CenterBlock from './list100centerblock';

export const List100Main = () => (
  <SMain>
    <Nav />
    <List100CenterBlock />
    <MainSidebar>
      <SidebarPersonal>
        <NavLink to="/mytrack">Sergey.Ivanov</NavLink>
        <div />
      </SidebarPersonal>
    </MainSidebar>
  </SMain>
);
