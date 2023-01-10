import React, { useState } from "react";

import { Sort, Categories, Product } from "./index";

export const Home = (props) => {
  const [activeCat, setActiveCat] = useState("Фирменные блюда");

  return (
    <>
      <div className="content__top">
        <div className="content__title">
          <h3>Бургеры</h3>
        </div>
        <Sort items={["популярности", "цене", "алфавиту"]} />
      </div>

      <div className="content">
        <Categories
          onClickItem={(name) => setActiveCat(name)}
          activeCat={activeCat}
          cats={props.cats}
        />

        <div className="products">
          {props.burgers.map((burger) => (
            <Product key={burger.imageUrl} {...burger} />
          ))}
        </div>
      </div>
    </>
  );
};
