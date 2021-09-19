import React from "react";

function PhotoGet() {
  const [id, setId] = React.useState(0);

  async function handleSubmit(event) {
    event.preventDefault();
    await fetch(`https://dogsapi.origamid.dev/json/api/photo/${id}`)
      .then((resposta) => {
        console.log(resposta);
        resposta.json();
      })
      .then((json) => console.log(json));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={id}
        onChange={({ target }) => setId(target.value)}
      />
      <button>Enviar</button>
    </form>
  );
}

export default PhotoGet;
