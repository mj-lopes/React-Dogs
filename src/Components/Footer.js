import React from "react";
import style from "./Footer.module.css";
import { ReactComponent as Dogs } from "../Assets/dogs-footer.svg";

function Footer() {
  return (
    <footer className={style.footer}>
      <Dogs />
      <p>Dogs. Alguns direitos reservados.</p>
    </footer>
  );
}

export default Footer;
