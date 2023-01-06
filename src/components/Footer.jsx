import React from "react";

export const Footer = () => {
  return (
    <footer>
      <div className="footer__left">
        <div className="footer__left__phone">
          <img src="./img/logo-phone.png" alt="phone"></img>
          <a>+7 (929) 816-36-39</a>
        </div>
        <div className="footer__left__address">
          <a>Ростов-на-Дону, Социалистическая 46а</a>
        </div>
        <div className="footer__left__times">
          <time>ПН-ЧТ 12:00-00:00</time>
          <time>ПТ-ВС 12:00-01:00</time>
        </div>
      </div>
      <div className="footer__right">
        <div className="footer__right__links">
          <img src="./img/logo-inst.png" alt="inst"></img>
          <img src="./img/logo-vk.png" alt="vk"></img>
        </div>
      </div>
    </footer>
  );
};
