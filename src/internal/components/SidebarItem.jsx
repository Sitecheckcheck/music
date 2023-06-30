import '../App.css';

function SidebarItem(props) {
  return (
    <div className="sidebar__item">
      <div className="sidebar__link" href="#">
        <img
          className="sidebar__img"
          src={props.playlist}
          alt="day's playlist"
        />
      </div>
    </div>
  );
}

export default SidebarItem;
