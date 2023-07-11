import Nav from '../nav/Nav';
import CenterBlock from '../centerblock/CenterBlock';
import Sidebar from '../sidebar/Sidebar';
import SMain from './mainStyle';

function Main() {
  return (
    <SMain>
      <Nav />
      <CenterBlock />
      <Sidebar playlist />
    </SMain>
  );
}

export default Main;
