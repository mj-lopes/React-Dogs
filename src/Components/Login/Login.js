import React from "react";
import { Navigate, Route, Routes } from "react-router";
import LoginForm from "./LoginForm";
import LoginCreate from "./LoginCreate";
import LoginPasswordLost from "./LoginPasswordLost";
import LoginPasswordReset from "./LoginPasswordReset";
import style from "./Login.module.css";
import Page404 from "../Page404";
import { useSelector } from "react-redux";

function Login() {
  const { data } = useSelector((state) => state.user);

  if (data) return <Navigate to="/conta" />;
  return (
    <section className={style.login}>
      <div className={style.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />}></Route>
          <Route path="criar" element={<LoginCreate />}></Route>
          <Route path="perdeu" element={<LoginPasswordLost />}></Route>
          <Route path="resetar" element={<LoginPasswordReset />}></Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </section>
  );
}

export default Login;
