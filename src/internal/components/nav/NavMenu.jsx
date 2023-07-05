import * as S from './styles';

function NavMenu() {
  return (
    <S.NavMenuStyle>
      <S.MenuList>
        <S.MenuItem>
          <a href="http://">Главное</a>
        </S.MenuItem>
        <S.MenuItem>
          <a href="http://">Мой плейлист</a>
        </S.MenuItem>
        <S.MenuItem>
          <a href="http://">Войти</a>
        </S.MenuItem>
      </S.MenuList>
    </S.NavMenuStyle>
  );
}

export default NavMenu;
