import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhoto } from "../../Store/photo";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import style from "./FeedModal.module.css";
import PhotoContent from "./Photo/PhotoContent";

function FeedModal({ photo, setModalPhoto }) {
  const { data, error, loading } = useSelector((state) => state.photo);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPhoto(photo.id));
  }, [photo, dispatch]);

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) setModalPhoto(null);
  }

  return (
    <div className={style.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent />}
    </div>
  );
}

export default FeedModal;
