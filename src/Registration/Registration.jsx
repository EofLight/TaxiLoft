import React from "react";

export const Registration = ({ handle }) => {
  /*function handleSubmit(e){
    e.preventDefault();
    console.log("submit");
  }*/

  return (
    <div className="wrapper">
      <div className="wrapper__logo"></div>
      <div className="wrapper__registration">
        <h1 className="title">Регистрация</h1>
        <form onSubmit={handle}>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            name="email"
            size="28"
            required={true}
          />
          <label htmlFor="user-name">Как вас зовут?</label>
          <input
            id="user-name"
            type="text"
            name="user-name"
            size="28"
            required={true}
          />
          <label htmlFor="password">Придумайте пароль:</label>
          <input
            id="password"
            type="password"
            name="password"
            size="28"
            required={true}
          />
          <a href="#" className="remember-password">
            Забыли пароль?
          </a>
          <button id="btn-reg" name="btn-reg" type="submit">
            Зарегестрироваться
          </button>
        </form>
        <p className="reg">
          Уже зарегестрированы?{" "}
          <a href="/" onClick={handle} className="reg__Link">
            Войти
          </a>
        </p>
      </div>
    </div>
  );
};
