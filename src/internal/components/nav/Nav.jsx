import { useState } from 'react';
import logo from '../../../img/logo.png';
import NavMenu from './NavMenu';
import {
  MainNav, NavLogo, LogoImage, NavBurger, BurgerLine,
} from './styles';

function Nav() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <MainNav>
      <NavLogo>
        <LogoImage src={logo} alt="logo" />
      </NavLogo>
      <NavBurger onClick={() => setOpenNav(!openNav)}>
        <BurgerLine />
        <BurgerLine />
        <BurgerLine />
      </NavBurger>
      {openNav && <NavMenu />}
    </MainNav>
  );
}

export default Nav;
