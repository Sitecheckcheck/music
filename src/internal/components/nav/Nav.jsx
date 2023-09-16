/* eslint-disable */
import { useState } from 'react';
import logo from '../../../img/logo.png';
import NavMenu from './NavMenu';
import * as S from './styles';

function Nav() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <S.MainNav>
      <S.NavLogo>
        <S.LogoImage src={logo} alt="logo" />
      </S.NavLogo>
      <S.NavBurger onClick={() => setOpenNav(!openNav)}>
        <S.BurgerLine />
        <S.BurgerLine />
        <S.BurgerLine />
      </S.NavBurger>
      {openNav && <NavMenu />}
    </S.MainNav>
  );
}

export default Nav;
