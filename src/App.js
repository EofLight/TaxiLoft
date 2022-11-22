//import logo from './img/logo.svg';
import React from "react";
import logoImg from "./img/logoImg.svg";
import logoTitle from "./img/logoTitle.svg";
import { Login } from "./Login/Login";
import { Map } from "./Map/Map";
import { LogOut } from "./Login/LogOut";
import { Profile } from "./Profile/Profile";
import "./styles/App.css";
/*
function MyHeader() {
  return (
    <header className="header">
      <div className="header__logo">
        <img className="header__logoImg" src={logoImg} />
        <img className="header__logoTitle" src={logoTitle} />
      </div>
      <div className="header__menu menu">
        <ul className="menu-list">
          <li className="menu-item">Карта</li>
          <li className="menu-item">Профиль</li>
          <li className="menu-item">Выйти</li>
        </ul>
      </div>
    </header>
  );
}*/

function App() {
  const [currentPage, setCurrentPage] = React.useState("login");
  const [isLogin, setIsLogin] = React.useState(false);
  const PAGES = {
    login: <Login />,
    map: <Map />,
    profile: <Profile />,
    logOut: <LogOut />,
  };
  const navigateTo = (page) => {
    if (page === "login") setIsLogin(false);
    //console.log("navigate");
    setCurrentPage(page);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("tut");
    setIsLogin(true);
    navigateTo("map");
  };

  if (isLogin) {
    return (
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <button
                  onClick={() => {
                    navigateTo("map");
                  }}
                >
                  Карта
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigateTo("profile");
                  }}
                >
                  Профиль
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigateTo("login");
                  }}
                >
                  Выйти
                </button>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <section>{PAGES[currentPage]}</section>
        </main>
      </div>
    );
  } else {
    return (
      <>
        <Login handle={handleSubmit} />
      </>
    );
  }
  /*return (
    

    <div>
      <header>
        <nav>
          <ul>
            <li>
              <button
                onClick={() => {
                  navigateTo("map");
                }}
              >
                Карта
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  navigateTo("profile");
                }}
              >
                Профиль
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  navigateTo("login");
                }}
              >
                Выйти
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section>{PAGES[currentPage]}</section>
      </main>
    </div>
  );*/
}

export default App;
