import React from "react";
import FeedModal from "./FeedModal";
import FeedPhotos from "./FeedPhotos";
import propTypes from "prop-types";

function Feed({ user }) {
  const [modalPhoto, setModalPhoto] = React.useState(null); // Serve para guardar o estado responsavel por armazenar os dados da foto atual clicada, para exibir no FeedModal;
  const [pages, setPages] = React.useState([1]);
  const [infinite, setInfinite] = React.useState(true);

  // Funcao de scroll Infinito
  React.useEffect(() => {
    let wait = false;

    function infiniteScroll() {
      if (infinite) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;

        if (scroll > height * 0.75 && !wait) {
          setPages((pages) => [...pages, pages.length + 1]);

          wait = true;
          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    }

    window.addEventListener("scroll", infiniteScroll);
    window.addEventListener("wheel", infiniteScroll);

    return () => {
      window.removeEventListener("scroll", infiniteScroll);
      window.removeEventListener("wheel", infiniteScroll);
    };
  }, [infinite]);

  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      {pages.map((page) => (
        <FeedPhotos
          key={page}
          user={user}
          page={page}
          setModalPhoto={setModalPhoto}
          setInfinite={setInfinite}
        />
      ))}
      {/* FeedPhotos, responsável por fazer o fetch e exibir a lista de dados/fotos */}

      {!infinite && (
        <p
          style={{
            textAlign: "center",
            padding: "2rem 0 4rem 0",
            color: "#888",
          }}
        >
          Não existem mais postagens.
        </p>
      )}
    </div>
  );
}

// Default props e proptypes, para fazer um melhor controle do fetch dos dados

Feed.defaultProps = {
  user: 0,
};

Feed.propTypes = {
  user: propTypes.oneOfType([
    propTypes.string.isRequired,
    propTypes.number.isRequired,
  ]),
};

export default Feed;
