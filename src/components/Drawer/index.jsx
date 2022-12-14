import React from "react";

export const Drawer = ({ onClickCartClose, cartView }) => {
  return (
    <div
      onClick={onClickCartClose}
      className={`overlay ${cartView ? "overlayVisible" : ""}`}
    >
      <div className="drawer">
        <div className="drawer__header">
          <div className="drawer__header__left" onClick={onClickCartClose}>
            <img src="../img/cart.svg" alt="Корзина"></img>
            <h2>Корзина</h2>
          </div>
          <div className="drawer__header__right">
            <img src="../img/drawer_trash.svg" alt="Очистить"></img>
            <h2>Очистить</h2>
          </div>
        </div>
        <div className="drawer__area">
          <div className="drawer__items">
            <div className="drawer__item">
              <div className="drawer__item_head">
                <div className="drawer__item-img">
                  <img src="./img/burgers/am1.jpg" alt="Товар" />
                </div>
                <h3>Американская мечта 1</h3>
              </div>
              <div className="drawer__item__foot">
                <div className="drawer__item-count">
                  <div className="button button--outline button--circle drawer__item-count-minus">
                    <img src="./img/drawer_minus.svg" alt="Минус"></img>
                  </div>
                  <b>2</b>
                  <div className="button button--outline button--circle drawer__item-count-plus">
                    <img src="./img/drawer_plus.svg" alt="Плюс"></img>
                  </div>
                </div>
                <div className="drawer__item-price">
                  <b>770 ₽</b>
                </div>
                <div className="drawer__item-remove">
                  {" "}
                  <div className="button button--outline button--circle">
                    <img src="./img/drawer_clear.svg" alt="Удалить"></img>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="drawer__buttons">
            <div className="drawer__bottom-details">
              <span>
                Всего товаров: <b>6 шт.</b>
              </span>
              <span>
                Сумма заказа: <b>2280 ₽</b>
              </span>
            </div>
            <div className="drawer__pay ">
              <h3>Оплатить сейчас</h3>
            </div>
            <div className="drawer__back">
              <h3>Вернуться назад</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
