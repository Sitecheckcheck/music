import { NavLink } from 'react-router-dom';
import Cookies from 'js-cookie';
import './signin.css';
import logoModal from '../../../img/logo_modal.png';

function Signin() {
  return (
    <div className="container-enter">
      <div className="modal__block">
        <form className="modal__form-login" id="formLogIn" action="#">
          <div className="modal__logo">
            <NavLink to="/">
              <img src={logoModal} alt="logo" />
            </NavLink>
          </div>
          <input
            className="modal__input login"
            type="text"
            name="login"
            id="formlogin"
            placeholder="Логин"
          />
          <input
            className="modal__input password"
            type="password"
            name="password"
            id="formpassword"
            placeholder="Пароль"
          />
          <button
            type="button"
            className="modal__btn-enter"
            id="btnEnter"
            onClick={() => {
              Cookies.set('token', 'pasha');
              window.location.reload();
            }}
          >
            <NavLink to="/">Войти</NavLink>
          </button>
          <button type="button" className="modal__btn-signup" id="btnSignUp">
            <NavLink to="/signup">Зарегистрироваться</NavLink>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signin;
