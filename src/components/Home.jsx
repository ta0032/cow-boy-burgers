import React, { useState } from "react";

import { Sort, Categories, Product, ProductBlock } from "./index";

export const Home = ({ cats, prdcts, isLoading }) => {
  const [activeCat, setActiveCat] = useState("Фирменные блюда");
  return (
    <>
      <div className="content__top">
        <div className="content__title">
          <h3>{activeCat}</h3>
        </div>
        <Sort items={["популярности", "цене", "алфавиту"]} />
      </div>

      <div className="content">
        <Categories
          key={cats.cat}
          onClickItem={(name) => setActiveCat(name)}
          activeCat={activeCat}
          cats={cats}
        />
        <div className="products">
          {prdcts.map((product) =>
            !isLoading
              ? activeCat === product.category && (
                  <Product key={product.id} {...product} />
                )
              : [...new Array(9)].map(() => <ProductBlock key={product.id} />)
          )}
        </div>
      </div>
    </>
  );
};
