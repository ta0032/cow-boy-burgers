import React from "react";

import { Sort } from "./Sort";
import { Categories } from "./Categories";
import { Product } from "./Product";

export const Home = () => {
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
          <Product />
        </div>
      </div>
    </>
  );
};
