import OptionQuestionButton from "../OptionQuestionButton";
import "../ModalOne/ModalOne.css";

const ModalFour = ({ handleSelectQuestion }) => {
  return (
      <div className="modal">
        <h1>Escolha sua comida preferida</h1>
        <div className="modal-div">
          <OptionQuestionButton
            title={"Pizza4"}
            img={"/imgs/modal1/pizza.png"}
            alt={"imagem de uma pizza"}
            onClick={() => handleSelectQuestion("optionOne", 5)}
          />
          <OptionQuestionButton
            title={"Hamburguer4"}
            img={"/imgs/modal1/hamburguer.png"}
            alt={"imagem de um hamburguer"}
            onClick={() => handleSelectQuestion("optionTwo", 5)}
          />
        </div>
        <div className="modal-div">
          <OptionQuestionButton
            title={"Massa4"}
            img={"/imgs/modal1/massa.png"}
            alt={"imagem de uma massa"}
            onClick={() => handleSelectQuestion("optionThree", 5)}
          />
          <OptionQuestionButton
            title={"Estrogonofe4"}
            img={"/imgs/modal1/estrogonofe.png"}
            alt={"imagem de um estrogonofe"}
            onClick={() => handleSelectQuestion("optionFour", 5)}
          />
        </div>
      </div>
  );
};

export default ModalFour;