import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./scss/App.scss";

import {
  Header,
  Footer,
  Drawer,
  Lk,
  Login,
  Registration,
  Home,
} from "./components/index";

function App() {
  const [cartViews, setCartViews] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [prdcts, setPrdcts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        await fetch("https://63c0abe099c0a15d28d9da20.mockapi.io/Products")
          .then((res) => res.json())
          .then((arr) => {
            setPrdcts(arr);
          });
        setIsLoading(false);
      } catch (error) {
        alert("Ошибка запроса");
        console.error(error);
      }
    }
    fetchData();
  }, []);

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

  return (
    <Router>
      <div className="App">
        <Drawer
          cartView={cartViews}
          onClickCartClose={() => {
            setCartViews(false);
          }}
        />
        <div className="wrapper">
          <Header onClickCartBtn={() => setCartViews(true)} />
          <Routes>
            <Route
              path="/"
              element={
                <Home isLoading={isLoading} cats={cats} prdcts={prdcts} />
              }
            ></Route>

            <Route path="/Profile" element={<Lk />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/Registration" element={<Registration />}></Route>
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
