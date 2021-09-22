import React from "react";
import { PHOTO_DELETE } from "../../../api";
import useFetch from "../../../Hooks/useFetch";
import style from "./PhotoDelete.module.css";

function PhotoDelete({ id }) {
  const { loading, request } = useFetch();

  async function handleClick() {
    const confirm = window.confirm("Tem certeza que deseja deletar?");

    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { response } = await request(url, options);

      if (response.ok) {
        window.location.reload();
      }
    }
  }

  return (
    <>
      {loading ? (
        <button className={style.delete} disabled>
          Deletar
        </button>
      ) : (
        <button onClick={handleClick} className={style.delete}>
          Deletar
        </button>
      )}
    </>
  );
}

export default PhotoDelete;
