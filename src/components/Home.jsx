import React from "react";

import { Sort } from "./Sort";
import { Categories } from "./Categories";
import { Product } from "./Product";

export const Home = () => {

  const burgers = [
    {
      imageUrl: "./img/burgers/am1.jpg",
      name: "Американская мечта 1",
      price: 370,
    },
    {
      imageUrl: "./img/burgers/am2.jpg",
      name: "Американская мечта 2",
      price: 370,
    },
    {
      imageUrl: "./img/burgers/cb.jpg",
      name: "Цезарь бургер",
      price: 320,
    },
    {
      imageUrl: "./img/burgers/dj.jpg",
      name: "Джанго",
      price: 590,
    },
    {
      imageUrl: "./img/burgers/dk.jpg",
      name: "Дикий койот",
      price: 450,
    },
    {
      imageUrl: "./img/burgers/dz.jpg",
      name: "Дикий Запад",
      price: 460,
    },
    {
      imageUrl: "./img/burgers/dzM.jpg",
      name: "Дикий Запад ( MAX)",
      price: 790,
    },
    {
      imageUrl: "./img/burgers/gk.jpg",
      name: "Гранд каньон",
      price: 470,
    },
    {
      imageUrl: "./img/burgers/ktc.jpg",
      name: "Кентукский",
      price: 450,
    },
    {
      imageUrl: "./img/burgers/lc.jpg",
      name: "Лихой ковбой",
      price: 550,
    },
    {
      imageUrl: "./img/burgers/lv.jpg",
      name: "Лас-Вегас",
      price: 390,
    },
    {
      imageUrl: "./img/burgers/mx.jpg",
      name: "Мексиканец",
      price: 490,
    },
    {
      imageUrl: "./img/burgers/sh4.jpg",
      name: "Шериф 4 сыра",
      price: 490,
    },
    {
      imageUrl: "./img/burgers/zl.jpg",
      name: "Золотая лихорадка",
      price: 580,
    },
  ];

  return (
    <>
      <div className="content__top">
        <div className="content__title">
          <h3>Бургеры</h3>
        </div>
        <Sort />
      </div>

      <div className="content">
        <Categories />
        <div className="products">
          {burgers.map((burger) => (
            <Product {...burger} />
          ))}
        </div>
      </div>
    </>
  );
};
