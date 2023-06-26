import "../App.css"
import playlist01 from "../../img/playlist01.png"
import playlist02 from "../../img/playlist02.png"
import playlist03 from "../../img/playlist03.png"
import playlist00 from "../../img/playlist00.png"
import { useEffect, useState } from "react"
import SidebarItem from "./SidebarItem"

function Sidebar() {
  const [isLoad, setIsLoad] = useState(true)

  useEffect(() => {
    const x = setTimeout(() => {
      setIsLoad(!isLoad)
    }, 2000)
  }, [false])

  return (
    <div className="main__sidebar sidebar">
      <div className="sidebar__personal">
        <p className="sidebar__personal-name">Sergey.Ivanov</p>
        <div className="sidebar__avatar"></div>
      </div>
      <div className="sidebar__block">
        <div className="sidebar__list">
          <SidebarItem playlist={isLoad ? playlist00 : playlist01} />
          <SidebarItem playlist={isLoad ? playlist00 : playlist02} />
          <SidebarItem playlist={isLoad ? playlist00 : playlist03} />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
