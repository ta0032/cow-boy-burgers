import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div className="categories">
      <Link to="/Profile">
        <div className="category">
          <h3>Профиль</h3>
        </div>
      </Link>
      <div className="category">
        <h3>Адреса</h3>
      </div>
      <div className="category">
        <h3>Оплата</h3>
      </div>
      <div className="category">
        <h3>Акции</h3>
      </div>
      <div className="category">
        <h3>История</h3>
      </div>
    </div>
  );
};
