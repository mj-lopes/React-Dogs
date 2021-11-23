import React from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.css";
import { ReactComponent as Dogs } from "../Assets/dogs.svg";
import { useSelector } from "react-redux";

function Header() {
  const { data } = useSelector((state) => state.user);

  return (
    <header className={style.header}>
      <nav className={`${style.nav} container`}>
        <ul>
          <li>
            <Link className={style.logo} to="/" aria-label="Dogs - Home">
              <Dogs />
            </Link>
          </li>
          {data ? (
            <li className={style.login}>
              <Link to="/conta">{data.username}</Link>
            </li>
          ) : (
            <li className={style.login}>
              <Link to="/login">Login / Criar</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
