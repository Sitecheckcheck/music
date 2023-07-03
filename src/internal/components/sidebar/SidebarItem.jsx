import { SidebarItemStyle, SidebarLink } from './styles';

function SidebarItem(props) {
  return (
    <SidebarItemStyle>
      <SidebarLink href="#">
        <img
          src={props.playlist}
          alt="day's playlist"
        />
      </SidebarLink>
    </SidebarItemStyle>
  );
}

export default SidebarItem;
