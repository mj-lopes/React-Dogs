import React from "react";
import { Navigate, Route, Routes } from "react-router";
import { UserContext } from "../../UserContext";
import Feed from "../Feed/Feed";
import UserHeader from "./UserHeader";
import UserPhotoPost from "./UserPhotoPost";
import UserStats from "./UserStats";

function User() {
  const { login, data } = React.useContext(UserContext);
  if (login !== true) return <Navigate to="/login" />; // Protected router não está funcionando, então a verificação será feita ao tenta acessar o componente/page 'User'

  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
      </Routes>
    </section>
  );
}

export default User;
