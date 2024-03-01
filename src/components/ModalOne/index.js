import "./ModalOne.css";

const ModalOne = ({ isOpen }) => {
  if (isOpen) {
    return (
      <div className="background">
        <div className="modal">
          <h2>Escolha sua comida preferida</h2>
          <div className="img-divs">
            <button>
              <img src="/imgs/modal1/pizza.png"></img>
            </button>
            <button>
              <img src="/imgs/modal1/estrogonofe.png"></img>
            </button>
          </div>
          <div className="img-divs">
            <button>
              <img src="/imgs/modal1/massa.png"></img>
            </button>
            <button>
              <img src="/imgs/modal1/hamburguer.png"></img>
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default ModalOne;
