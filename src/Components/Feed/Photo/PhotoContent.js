import React from "react";
import { Link } from "react-router-dom";
import PhotoComments from "./PhotoComments";
import style from "./PhotoContent.module.css";

function PhotoContent({ data }) {
  const { photo, comments } = data;

  return (
    <div className={style.photo}>
      <div className={style.img}>
        <img src={photo.src} alt={photo.title} />
      </div>
      <div className={style.detalhes}>
        <div>
          <p className={style.autor}>
            <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            <span className={style.visualizacoes}>{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={style.atributos}>
            <li>{photo.peso}Kg</li>
            <li>{photo.idade}anos</li>
          </ul>
        </div>
      </div>
      <PhotoComments
        className={style.comentarios}
        id={photo.id}
        comments={comments}
      />
    </div>
  );
}

export default PhotoContent;
