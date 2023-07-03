import '../App.css';
import Nav from './nav/Nav';
import CenterBlock from './CenterBlock';
import Sidebar from './sidebar/Sidebar';

function Main() {
  return (
    <main className="main">
      <Nav />
      <CenterBlock />
      <Sidebar playlist />
    </main>
  );
}

export default Main;
