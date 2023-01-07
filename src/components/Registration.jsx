import React from "react";

export const Registration = () => {
  return (
    <div className="registration">
      <div className="lk__items">
        <div className="lk__item">
          <h3 className="lk__title">Имя</h3>
          <input className="lk__name__input" type={"text"} />
        </div>
        <div className="lk__item">
          <h3 className="lk__title">Email</h3>
          <input
            className="lk__email__input"
            type={"email"}
            placeholder="sample@mail.com"
          />
        </div>{" "}
        <div className="lk__item">
          <h3 className="lk__title">Телефон</h3>
          <input
            className="lk__tel__input"
            type={"tel"}
            placeholder="+7 (999) 999 45-45"
          />
        </div>
        <div className="lk__item">
          <h3 className="lk__title">День рождения</h3>
          <input
            className="lk__birthday__input"
            type={"date"}
            placeholder="__.__.____"
          />
        </div>
        <div className="lk__item">
          <h3 className="lk__title">Введите пароль</h3>
          <input className="lk__psw__input" type={"password"} />
        </div>{" "}
        <div className="lk__item">
          <h3 className="lk__title">Введите пароль ещё раз</h3>
          <input className="lk__psw__input" type={"password"} />
        </div>
      </div>
      <div className="lk__button">
        <h3>Регистрация</h3>
      </div>
      <span className="lk__lostpsw">
        <img src="./img/approve.svg" alt="approve" />Я даю согласие на обработку
        персональных данных
      </span>
    </div>
  );
};
