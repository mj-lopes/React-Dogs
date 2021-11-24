import React from "react";
import { useDispatch } from "react-redux";
import { fetchPhoto } from "../../Store/photo";
import { openModal } from "../../Store/ui";
import Image from "../Helper/Image";
import style from "./FeedPhotosItem.module.css";

function FeedPhotosItem({ photo }) {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(openModal());
    dispatch(fetchPhoto(photo.id));
  }

  return (
    <li className={style.photo} onClick={handleClick}>
      <Image src={photo.src} alt={photo.title} />
      <span className={style.visualizacao}>{photo.acessos}</span>
    </li>
  );
}

export default FeedPhotosItem;
