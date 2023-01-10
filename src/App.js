import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./scss/App.scss";

import {
  Header,
  Footer,
  Drawer,
  Lk,
  Login,
  Registration,
  Home,
} from "./components/index";

function App() {
  const [cartViews, setCartViews] = useState(false);

  const burgers = [
    {
      imageUrl: "./img/burgers/am1.jpg",
      title: "Американская мечта 1",
      price: 370,
    },
    {
      imageUrl: "./img/burgers/am2.jpg",
      title: "Американская мечта 2",
      price: 370,
    },
    {
      imageUrl: "./img/burgers/cb.jpg",
      title: "Цезарь бургер",
      price: 320,
    },
    {
      imageUrl: "./img/burgers/dj.jpg",
      title: "Джанго",
      price: 590,
    },
    {
      imageUrl: "./img/burgers/dk.jpg",
      title: "Дикий койот",
      price: 450,
    },
    {
      imageUrl: "./img/burgers/dz.jpg",
      title: "Дикий Запад",
      price: 460,
    },
    {
      imageUrl: "./img/burgers/dzM.jpg",
      title: "Дикий Запад ( MAX)",
      price: 790,
    },
    {
      imageUrl: "./img/burgers/gk.jpg",
      title: "Гранд каньон",
      price: 470,
    },
    {
      imageUrl: "./img/burgers/ktc.jpg",
      title: "Кентукский",
      price: 450,
    },
    {
      imageUrl: "./img/burgers/lc.jpg",
      title: "Лихой ковбой",
      price: 550,
    },
    {
      imageUrl: "./img/burgers/lv.jpg",
      title: "Лас-Вегас",
      price: 390,
    },
    {
      imageUrl: "./img/burgers/mx.jpg",
      title: "Мексиканец",
      price: 490,
    },
    {
      imageUrl: "./img/burgers/sh4.jpg",
      title: "Шериф 4 сыра",
      price: 490,
    },
    {
      imageUrl: "./img/burgers/zl.jpg",
      title: "Золотая лихорадка",
      price: 580,
    },
  ];

  const cats = [
    { cat: "Фирменные блюда" },
    { cat: "Бургеры" },
    { cat: "Хот-Доги" },
    { cat: "Салаты" },
    { cat: "Закуски" },
    { cat: "Супы" },
    { cat: "Гарниры" },
    { cat: "Напитки" },
    { cat: "Соусы" },
  ];

  return (
    <Router>
      <div className="App">
        <Drawer
          cartView={cartViews}
          onClickCartClose={() => {
            setCartViews(false);
          }}
        />
        <div className="wrapper">
          <Header onClickCartBtn={() => setCartViews(true)} />
          <Routes>
            <Route
              path="/"
              element={<Home burgers={burgers} cats={cats} />}
            ></Route>

            <Route path="/Profile" element={<Lk />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/Registration" element={<Registration />}></Route>
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
