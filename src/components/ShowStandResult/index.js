import "./ShowStandResult.css";

const ShowStandResult = ({ title, img, alt, description, dispatch }) => {
  const Restart = () => {
    location.reload();
  };

  const shareResult = () => {
    if (navigator.share !== undefined) {
      navigator
        .share({
          title: "Aqui esta o meu Stand! Faça o seu tambem",
          url: "URL do compartilhamento",
        })
        .then(() => console.log("Compartilhado com sucesso"))
        .catch((error) => console.error("Erro ao compartilhar", error));
    } else {
      // Fallback para compartilhamento
      alert(
        "A função de compartilhamento não está disponível neste navegador."
      );
    }
  };

  return (
    <div className="modal">
      <h1>{title}</h1>
      <img src={img} alt={alt} className="modal-img" />
      <p className="modal-paragraph">{description}</p>
      <button onClick={Restart}>Refazer Quiz</button>
      <button onClick={shareResult}>Compartilhar Resultado</button>
    </div>
  );
};

export default ShowStandResult;
