import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { ReactComponent as MinhasFotos } from "../../Assets/feed.svg";
import { ReactComponent as Estatisticas } from "../../Assets/estatisticas.svg";
import { ReactComponent as Adicionar } from "../../Assets/adicionar.svg";
import { ReactComponent as Sair } from "../../Assets/sair.svg";
import style from "./UserHeaderNav.module.css";
import { useMedia } from "../../Hooks/useMedia";

function UserHeaderNav() {
  const { userLogout } = React.useContext(UserContext);
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const mobile = useMedia("(max-width: 40rem)");

  const { pathname } = useLocation();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          className={`${style.mobileButton} ${
            mobileMenu && style.mobileButtonActive
          }`}
          aria-label="Menu"
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav
        className={`${mobile ? style.navMobile : style.nav} ${
          mobileMenu && style.navMobileActive
        }`}
      >
        <NavLink
          to="/conta"
          end
          className={({ isActive }) => (isActive ? style.active : "")}
        >
          <MinhasFotos />
          {mobile && "Minhas Fotos"}
        </NavLink>
        <NavLink
          to="/conta/estatisticas"
          className={({ isActive }) => (isActive ? style.active : "")}
        >
          <Estatisticas />
          {mobile && "Estatisticas"}
        </NavLink>
        <NavLink
          to="/conta/postar"
          className={({ isActive }) => (isActive ? style.active : "")}
        >
          <Adicionar />
          {mobile && "Postar Foto"}
        </NavLink>
        <button onClick={userLogout}>
          <Sair />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
}

export default UserHeaderNav;
