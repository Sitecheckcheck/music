import { useEffect, useState } from 'react';
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

function Sidebar() {
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoad(!isLoad);
    }, 1000);
  }, []);

  return (
    <MainSidebar>
      <SidebarPersonal>
        <p>Sergey.Ivanov</p>
        <div />
      </SidebarPersonal>
      <SidebarBlock>
        <SidebarList>
          <SidebarItem playlist={isLoad ? playlist00 : playlist01} />
          <SidebarItem playlist={isLoad ? playlist00 : playlist02} />
          <SidebarItem playlist={isLoad ? playlist00 : playlist03} />
        </SidebarList>
      </SidebarBlock>
    </MainSidebar>
  );
}

export default Sidebar;
