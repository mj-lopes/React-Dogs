import React from "react";
import FeedModal from "./FeedModal";
import FeedPhotos from "./FeedPhotos";

function Feed() {
  const [modalPhoto, setModalPhoto] = React.useState(null); // Serve para guardar o estado responsavel por armazenar os dados da foto atual clicada, para exibir no FeedModal;

  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      <FeedPhotos setModalPhoto={setModalPhoto} />
      {/* FeedPhotos, responsável por fazer o fetch e exibir a lista de dados/fotos */}
    </div>
  );
}

export default Feed;
