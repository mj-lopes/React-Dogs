import React from "react";
import style from "./FeedPhotosItem.module.css";

function FeedPhotosItem({ photo, setModalPhoto }) {
  function handleClick() {
    setModalPhoto(photo); // Ao clicar em uma li (foto), é mudado o estado de modalPhoto, e com isto, é aberto o modal para a exibição dos dados da foto clicada
  }

  return (
    <li className={style.photo} onClick={handleClick}>
      <img src={photo.src} alt={photo.title} />
      <span className={style.visualizacao}>{photo.acessos}</span>
    </li>
  );
}

export default FeedPhotosItem;
