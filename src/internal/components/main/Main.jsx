import { Nav } from '../nav/Nav';
import { CenterBlock } from '../centerblock/CenterBlock';
import { Sidebar } from '../sidebar/Sidebar';
import SMain from './mainStyle';

export const Main = ({ isLoad, setIsLoad }) => (
  <SMain>
    <Nav />
    <CenterBlock isLoad={isLoad} setIsLoad={setIsLoad} />
    <Sidebar isLoad={isLoad} setIsLoad={setIsLoad} />
  </SMain>
);
