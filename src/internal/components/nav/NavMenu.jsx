import { NavLink } from 'react-router-dom';
import * as S from './styles';

function NavMenu() {

  const logOut = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('refresh');
  }

  return (
    <S.NavMenuStyle>
      <S.MenuList>
        <S.MenuItem>
          <NavLink to="/">Главное</NavLink>
        </S.MenuItem>
        <S.MenuItem>
          <NavLink to="/mytrack">Мой плейлист</NavLink>
        </S.MenuItem>
        <S.MenuItem>
          <NavLink
            to="/signin"
            onClick={logOut}
          >
            Выйти
          </NavLink>
        </S.MenuItem>
      </S.MenuList>
    </S.NavMenuStyle>
  );
}

export default NavMenu;
