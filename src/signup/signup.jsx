import "./signup.css"
import logoModal from "../img/logo_modal.png"

function Signup() {
  return (
    <div className="container-enter">
      <div className="modal__block">
        <form className="modal__form-login" id="formLogIn" action="#">
          <div className="modal__logo">
            <img src={logoModal} alt="logo" />
          </div>
          <input
            className="modal__input login"
            type="text"
            name="login"
            id="loginReg"
            placeholder="Логин"
          />
          <input
            className="modal__input password-first"
            type="password"
            name="password"
            id="passwordFirst"
            placeholder="Пароль"
          />
          <input
            className="modal__input password-double"
            type="password"
            name="password"
            id="passwordSecond"
            placeholder="Повторите пароль"
          />
          <button className="modal__btn-signup-ent" id="SignUpEnter">
            <a href="../index.html">Зарегистрироваться</a>{" "}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Signup
