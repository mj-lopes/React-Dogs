import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../UserContext";
import Image from "../../Helper/Image";
import PhotoComments from "./PhotoComments";
import PhotoDelete from "./PhotoDelete";
import style from "./PhotoContent.module.css";
import { useSelector } from "react-redux";

function PhotoContent({ single }) {
  const user = React.useContext(UserContext);
  const { photo, comments } = useSelector((state) => state.photo.data);

  return (
    <div className={`${style.photo} ${single ? style.single : ""}`}>
      <div className={style.img}>
        <Image src={photo.src} alt={photo.title} />
      </div>
      <div className={style.detalhes}>
        <div>
          <p className={style.autor}>
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}

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
        single={single}
      />
    </div>
  );
}

export default PhotoContent;
