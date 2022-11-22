import React from "react";
import { Registration } from "../Registration/Registration";

export const Login = ({ handle }) => {
  const [signInOrUp, setSignInOrUp] = React.useState("In");

  /*function handleSubmit(e){
    e.preventDefault();
    console.log("submit");
  }*/

  const reg = (e) => {
    e.preventDefault();
    console.log("from in to up");
    setSignInOrUp("Up");
  };

  const signIn=(e)=>{
    e.preventDefault();
    console.log("from up to in");
    setSignInOrUp("In");
  }

  if (signInOrUp === "In")
    return (
      <div className="wrapper">
        <div className="wrapper__logo"></div>
        <div className="wrapper__login">
          <h1 className="title">Войти</h1>
          <form onSubmit={handle}>
            <label htmlFor="email">Email:</label>
            <input id="email" type="email" name="email" size="28" />
            <label htmlFor="password">Пароль:</label>
            <input id="password" type="password" name="password" size="28" />
            <a href="#" className="remember-password">
              Забыли пароль?
            </a>
            <button id="btn-login" name="btn-login" type="submit">
              Войти
            </button>
          </form>
          <p className="reg">
            Новый пользователь?{" "}
            <a href="" onClick={reg} className="reg__Link">
              Регистрация
            </a>
          </p>
        </div>
      </div>
    );
  else return <Registration handle={signIn}/>;
};
