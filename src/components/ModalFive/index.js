import OptionQuestionButton from "../OptionQuestionButton";
import "../ModalOne/ModalOne.css";

const ModalFive = ({ handleSelectQuestion }) => {
  return (
      <div className="modal">
        <h1>Escolha sua comida preferida</h1>
        <div className="modal-div">
          <OptionQuestionButton
            title={"Pizza5"}
            img={"/imgs/modal1/pizza.png"}
            alt={"imagem de uma pizza"}
            onClick={() => handleSelectQuestion("optionOne", 6)}
          />
          <OptionQuestionButton
            title={"Hamburguer5"}
            img={"/imgs/modal1/hamburguer.png"}
            alt={"imagem de um hamburguer"}
            onClick={() => handleSelectQuestion("optionTwo", 6)}
          />
        </div>
        <div className="modal-div">
          <OptionQuestionButton
            title={"Massa5"}
            img={"/imgs/modal1/massa.png"}
            alt={"imagem de uma massa"}
            onClick={() => handleSelectQuestion("optionThree", 6)}
          />
          <OptionQuestionButton
            title={"Estrogonofe5"}
            img={"/imgs/modal1/estrogonofe.png"}
            alt={"imagem de um estrogonofe"}
            onClick={() => handleSelectQuestion("optionFour", 6)}
          />
        </div>
      </div>
  );
};

export default ModalFive;