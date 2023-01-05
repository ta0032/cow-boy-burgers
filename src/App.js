import React from "react";
import "./scss/App.scss";
import { Header } from "./components/Header";
import { Product } from "./components/Product";
import { Footer } from "./components/Footer";
import { Categories } from "./components/Categories";
import { Sort } from "./components/Sort";
import { Drawer } from "../src/components/Drawer";

function App() {
  return (
    <div className="App">
      <Drawer />

      <div className="wrapper">
        <Header />

        <div className="content__top">
          <div className="content__title">
            <h3>Бургеры</h3>
          </div>
          <Sort />
        </div>
        <div className="content">
          <Categories />
          <div className="products">
            <Product />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
