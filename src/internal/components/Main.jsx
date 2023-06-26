import "../App.css"
import Nav from "./Nav"
import CenterBlock from "./CenterBlock"
import Sidebar from "./Sidebar"

function Main() {
  return (
    <main className="main">
      <Nav />
      <CenterBlock />
      <Sidebar playlist />
    </main>
  )
}

export default Main
