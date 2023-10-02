import { Nav } from '../nav/Nav';
import { CenterBlock } from '../centerblock/CenterBlock';
import { Sidebar } from '../sidebar/Sidebar';
import SMain from './mainStyle';

export const Main = () => (
  <SMain>
    <Nav />
    <CenterBlock />
    <Sidebar />
  </SMain>
);
