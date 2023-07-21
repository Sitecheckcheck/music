import { NavLink } from 'react-router-dom';
import Nav from '../nav/Nav';
import { MainSidebar, SidebarPersonal } from '../sidebar/styles';
import SMain from '../main/mainStyle';
import ListdayCenterBlock from './listdaycenterblock';

function ListdayMain() {
  return (
    <SMain>
      <Nav />
      <ListdayCenterBlock />
      <MainSidebar>
        <SidebarPersonal>
          <NavLink to="/mytrack">Sergey.Ivanov</NavLink>
          <div />
        </SidebarPersonal>
      </MainSidebar>
    </SMain>
  );
}

export default ListdayMain;
