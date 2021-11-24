import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../Store/ui";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import style from "./FeedModal.module.css";
import PhotoContent from "./Photo/PhotoContent";

function FeedModal() {
  const { modal } = useSelector((state) => state.ui);
  const { data, error, loading } = useSelector((state) => state.photo);
  const dispatch = useDispatch();

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) dispatch(closeModal());
  }

  React.useEffect(() => {
    dispatch(closeModal());
  }, [dispatch]);

  if (!modal) return null;

  return (
    <div className={style.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent />}
    </div>
  );
}

export default FeedModal;
