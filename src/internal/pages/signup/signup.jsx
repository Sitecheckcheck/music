import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './signup.css';
import logoModal from '../../../img/logo_modal.png';
import { registerUser } from '../../api';
import { useUserNameContext } from '../../../contexts/userName';

function Signup() {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState();
  const [disabled, setDisabled] = useState();
  const navigate = useNavigate();
  const {setUserName} = useUserNameContext()

  const getRegisterUser = async () => {
    try {
      setDisabled(true);
      const user = await registerUser(login, password);
      localStorage.setItem('user', user.username);
      if (user.email) {
        if (user.email !== login) {
          setErrorMessage(user.email[0]);
        }
      }

      if (user.password) {
        if (user.password !== password) {
          setErrorMessage(user.password[0]);
        }
      }

      if (user.email === login && user.id) {
        setUserName(user.username)
        navigate('/');
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setDisabled(false);
    }
  };

  const registerClick = () => {
    if (login?.length === 0) {
      setErrorMessage('Введите логин');
    } else if (password?.length === 0) {
      setErrorMessage('Введите пароль');
    } else if (confirmPassword?.length === 0) {
      setErrorMessage('Введите повторный пароль');
    } else if (confirmPassword !== password) {
      setErrorMessage('Введенные пароли отличаются');
    } else {
      getRegisterUser();
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
            id="loginReg"
            placeholder="Логин"
            onInput={(e) => {
              setLogin(e.target.value);
            }}
          />
          <input
            className="modal__input password-first"
            type="password"
            name="password"
            id="passwordFirst"
            placeholder="Пароль"
            onInput={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input
            className="modal__input password-double"
            type="password"
            name="password"
            id="passwordSecond"
            placeholder="Повторите пароль"
            onInput={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          <p style={{color: 'red'}}>{errorMessage}</p>
          <button
            type="button"
            className="modal__btn-signup-ent"
            id="SignUpEnter"
            disabled={disabled}
            onClick={() => registerClick()}
          >
            Зарегистрироваться
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
