import "../App.css"

function SidebarItem(props) {
  return (
    <div className="sidebar__item">
      <a className="sidebar__link" href="#">
        <img
          className="sidebar__img"
          src={props.playlist}
          alt="day's playlist"
        />
      </a>
    </div>
  )
}

export default SidebarItem
