import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <>
      <div className="content__top">
        <div className="content__title">
          <h3>Личный кабинет</h3>
        </div>
        <Link to="/Registration">
          <div className="lk-button__head">
            <h3>Регистрация</h3>
          </div>
        </Link>
      </div>
      <div className="content">
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
      </div>
    </>
  );
};
