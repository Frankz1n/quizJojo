import "./ModalOne.css";

const ModalOne = ({ isOpen }) => {
  if (isOpen) {
    return (
      <div className="backgorund-modal">
        <div className="modal">
          <h1>Escolha sua comida preferida</h1>
          <div className="modal-div">
            <button onClick={} className="btn-modal">
              <h2>Pizza</h2>
              <img
                src="/imgs/modal1/pizza.png"
                alt="imagem de uma pizza"
                className="modal-img"
              ></img>
            </button>
            <button className="btn-modal">
              <h2>Hamburguer</h2>
              <img
                src="/imgs/modal1/hamburguer.png"
                alt="imagem de um hamburguer"
                className="modal-img"
              ></img>
            </button>
          </div>
          <div className="modal-div">
            <button className="btn-modal">
              <h2>Massa</h2>
              <img
                src="/imgs/modal1/massa.png"
                alt="imagem de uma massa"
                className="modal-img"
              ></img>
            </button>
            <button className="btn-modal">
              <h2>Estrogonofe</h2>
              <img
                src="/imgs/modal1/estrogonofe.png"
                alt="imagem de um estrogonofe"
                className="modal-img"
              ></img>
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default ModalOne;
