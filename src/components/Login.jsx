import React from "react";

export const Login = () => {
  return (
    <div className="login">
      <div className="lk__item">
        <h3 className="lk__title">Введите email</h3>
        <input
          className="lk__email__input"
          type={"email"}
          placeholder="sample@mail.com"
        />
      </div>
      <div className="lk__item">
        <h3 className="lk__title">Введите пароль</h3>
        <input className="lk__psw__input" type={"password"} />
      </div>
      <div className="lk__button">
        <h3>Войти</h3>
      </div>
      <span className="lk__lostpsw">Забыли пароль?</span>
    </div>
  );
};
