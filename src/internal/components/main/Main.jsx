import Nav from '../nav/Nav';
import CenterBlock from '../centerblock/CenterBlock';
import Sidebar from '../sidebar/Sidebar';
import SMain from './mainStyle';

function Main({
  isLoad, setIsLoad, selectTrack, setSelectTrack,
}) {
  return (
    <SMain>
      <Nav />
      <CenterBlock
        isLoad={isLoad}
        setIsLoad={setIsLoad}
        selectTrack={selectTrack}
        setSelectTrack={setSelectTrack}
      />
      <Sidebar isLoad={isLoad} playlist />
    </SMain>
  );
}

export default Main;
