import { NavLink } from 'react-router-dom';
import Cookies from 'js-cookie';
import * as S from './styles';

function NavMenu() {
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
            onClick={() => {
              Cookies.remove('token', 'pasha');
              window.location.reload();
            }}
          >
            Выйти
          </NavLink>
        </S.MenuItem>
      </S.MenuList>
    </S.NavMenuStyle>
  );
}

export default NavMenu;
