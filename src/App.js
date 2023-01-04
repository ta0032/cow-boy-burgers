import React from "react";
import "./scss/App.scss";
import { Header } from "./components/Header";
import { Product } from "./components/Product";
import { Footer } from "./components/Footer";
import { Categories } from "./components/Categories";
import { Sort } from "./components/Sort";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />

        <div className="content__top">
          <div className="content__title">
            <h3>Все бургеры</h3>
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
