import React from "react";
import FeedPhotosItem from "./FeedPhotosItem";
import style from "./FeedPhotos.module.css";
import { useSelector } from "react-redux";

function FeedPhotos({ setModalPhoto }) {
  const { list } = useSelector((state) => state.feed);

  return (
    <ul className={`animeLeft ${style.feed}`}>
      {list.map((photo) => (
        <FeedPhotosItem
          key={photo.id}
          photo={photo}
          setModalPhoto={setModalPhoto}
        />
      ))}
    </ul>
  );
}

export default FeedPhotos;
