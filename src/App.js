//import logo from './img/logo.svg';
import React from "react";
import logoImg from "./img/logoImg.svg";
import logoTitle from "./img/logoTitle.svg";
import {Login} from "./Login/Login";
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
const PAGES = { 
  login:<Login />,
  map: <Map />, 
  profile: <Profile />, 
  logOut: <LogOut /> };
class App extends React.Component {
  state = { currentPage: "login" };

  navigateTo = (page) => {
    this.setState({ currentPage: page });
  };
  render() {
    return (
      <>
        <header>
          <nav>
            <ul>
              <li>
                <button
                  onClick={() => {
                    this.navigateTo("map");
                  }}
                >
                  Карта
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    this.navigateTo("profile");
                  }}
                >
                  Профиль
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    this.navigateTo("login");
                  }}
                >
                  Выйти
                </button>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <section>
            {PAGES[this.state.currentPage]}
          </section>
        </main>
      </>
    );
  }
}

export default App;
