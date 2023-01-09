import React from "react";
import { Category } from "./Category";

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

export const Categories = () => {
  return (
    <div className="categories">
      {cats.map((cats) => (
        <Category {...cats} />
      ))}
    </div>
  );
};
