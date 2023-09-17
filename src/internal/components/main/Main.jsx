import Nav from '../nav/Nav';
import CenterBlock from '../centerblock/CenterBlock';
import Sidebar from '../sidebar/Sidebar';
import SMain from './mainStyle';

function Main({ isLoad, setIsLoad }) {
  return (
    <SMain>
      <Nav />
      <CenterBlock isLoad={isLoad} setIsLoad={setIsLoad} />
      <Sidebar isLoad={isLoad} setIsLoad={setIsLoad} />
    </SMain>
  );
}

export default Main;
