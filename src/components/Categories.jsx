import React from "react";

export const Categories = ({ cats, onClickItem, activeCat }) => {
  return (
    <div className="categories">
      {cats.map((cats) => (
        <button
          onClick={() => onClickItem(cats.cat)}
          className={`category ${activeCat === cats.cat ? "active" : ""}`}
          key={cats.cat}
        >
          <h3>{cats.cat}</h3>
        </button>
      ))}
    </div>
  );
};
