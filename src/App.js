import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./scss/App.scss";

import { Header } from "./components/Header";
import { Product } from "./components/Product";
import { Footer } from "./components/Footer";
import { Categories } from "./components/Categories";
import { Sort } from "./components/Sort";
import { Drawer } from "../src/components/Drawer";
import { Login } from "../src/components/Login";
import { Registration } from "./components/Registration";
import { Lk } from "./components/Lk";

function App() {
  return (
    <Router>
      <div className="App">
        <Drawer />

        <div className="wrapper">
          <Header />

          <div className="content__top">
            <div className="content__title">
              <h3>Личный кабинет</h3>
            </div>
            {/* <Sort /> */}

            <Lk />
          </div>
          <div className="content">
            {/* <Categories /> */}

            {/* <Login /> */}
            <Registration />
            {/* <div className="products">
              <Product />
            </div> */}
          </div>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
