import React, { useState, useEffect, useRef } from "react";

export const Sort = ({ items }) => {
  const [sortAct, setSortAct] = useState(false);
  const [activeSort, setActiveSort] = useState("популярности");

  const toggleSortAct = () => {
    setSortAct(!sortAct);
  };

  const setNewActiveSort = (item) => {
    setActiveSort(item);
    setSortAct(false);
  };

  const clickOnBody = (tap) => {
    if (!tap.path.includes(sortRef.current)) {
      setSortAct();
    }
  };

  const sortRef = useRef();

  useEffect(() => {
    document.body.addEventListener("click", clickOnBody);
  }, []);

  return (
    <div className="sort" ref={sortRef}>
      <div className="sort__label">
        <svg
          className={!sortAct ? "rotated" : ""}
          width="10"
          height="5"
          viewBox="0 0 10 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#ffffff"
          ></path>
        </svg>
        <b>Сортировка по:</b>
        <span onClick={toggleSortAct}>{activeSort}</span>
      </div>
      {sortAct && (
        <div className="sort__popup">
          <ul>
            {items.map((item) => (
              <li
                onClick={() => setNewActiveSort(item)}
                className={`${activeSort === item ? "active" : ""}`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
