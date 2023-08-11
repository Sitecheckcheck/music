import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './signin.css';
import logoModal from '../../../img/logo_modal.png';
import { authUser } from '../../api';
/* eslint-disable */
function Signin() {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState();
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();

  const getAuthUser = async () => {
    try {
      setDisabled(true);
      const user = await authUser(login, password);
      localStorage.setItem('user', user.username);

      if (user.detail) {
        setErrorMessage(user.detail);
      }

      if (user.id) {       
        navigate('/');
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setDisabled(false);
    }
  };

  const loginClick = () => {
    if (login?.length === 0) {
      setErrorMessage('Введите логин');
    } else if (password?.length === 0) {
      setErrorMessage('Введите пароль');
    } else {
      getAuthUser();
    }
  };
  
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
            onInput={(e) => {
              setLogin(e.target.value);
            }}
          />
          <input
            className="modal__input password"
            type="password"
            name="password"
            id="formpassword"
            placeholder="Пароль"
            onInput={(e) => {
              setPassword(e.target.value);
            }}
          />
          <p style={{ color: 'red' }}>{errorMessage}</p>
          <button
            type="button"
            className="modal__btn-enter"
            id="btnEnter"
            disabled={disabled}
            onClick={() => loginClick()}
          >
            Войти
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
