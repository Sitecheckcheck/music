import "../App.css"
import logo from "../../img/logo.png"
import NavMenu from "./NavMenu"
import { useState } from "react"

function Nav() {
  const [openNav, setOpenNav] = useState(false)

  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        <img className="logo__image" src={logo} alt="logo" />
      </div>
      <div className="nav__burger burger" onClick={() => setOpenNav(!openNav)}>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
      </div>
      {openNav && <NavMenu />}
    </nav>
  )
}

export default Nav
