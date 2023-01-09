import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./scss/App.scss";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import { Drawer } from "../src/components/Drawer";
import { Lk } from "./components/Lk";
import { Login } from "./components/Login";
import { Registration } from "./components/Registration";
import { Home } from "./components/Home";

function App() {
  const [cartViews, setCartViews] = useState(false);

  return (
    <Router>
      <div className="App">
        <Drawer
          cartView={cartViews}
          onClickCartHdr={() => {
            setCartViews(false);
          }}
        />
        <div className="wrapper">
          <Header onClickCartBtn={() => setCartViews(true)} />
          <Routes>
            <Route path="/" element={<Home />}></Route>

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
