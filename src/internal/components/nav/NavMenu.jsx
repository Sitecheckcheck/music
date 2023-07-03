import { NavMenuStyle, MenuList, MenuItem } from './styles';

function NavMenu() {
  return (
    <NavMenuStyle>
      <MenuList>
        <MenuItem>
          <a href="http://">
            Главное
          </a>
        </MenuItem>
        <MenuItem>
          <a href="http://">
            Мой плейлист
          </a>
        </MenuItem>
        <MenuItem>
          <a href="http://">
            Войти
          </a>
        </MenuItem>
      </MenuList>
    </NavMenuStyle>
  );
}

export default NavMenu;
