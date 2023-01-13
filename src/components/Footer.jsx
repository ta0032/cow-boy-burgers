import React from "react";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-left">
        <div className="footer-left__phone">
          <img src="./img/logo-phone.png" alt="phone"></img>
          <p>+7 (929) 816-36-39</p>
        </div>
        <div className="footer-left__address">
          <p>Ростов-на-Дону, Социалистическая 46а</p>
        </div>
        <div className="footer-left__times">
          <time>ПН-ЧТ 12:00-00:00</time>
          <time>ПТ-ВС 12:00-01:00</time>
        </div>
      </div>
      <div className="footer-right">
        <div className="footer-right__links">
          <a href="https://www.instagram.com/cow_boy_burger/#">
            <img src="./img/logo-inst.png" alt="inst"></img>
          </a>
        </div>
        <div className="footer-right__links">
          <a href="https://vk.com/cowboy_burger">
            <img src="./img/logo-vk.png" alt="vk"></img>
          </a>
        </div>
      </div>
    </footer>
  );
};
