import React from "react";
import { Link } from "react-router-dom";

import { Nav } from "./Nav";
import { Profile } from "./Profile";

export const Lk = () => {
  return (
    <>
      <div className="content__top">
        <div className="content__title">
          <h3>Личный кабинет</h3>
        </div>
        <Link to="/Login">
          <div className="lk__button__head">
            <h3>Выйти</h3>
          </div>
        </Link>
      </div>
      <div className="content">
        <Nav />
        <Profile />
      </div>
    </>
  );
};
