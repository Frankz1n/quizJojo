import OptionQuestionButton from "../OptionQuestionButton";
import "../ModalOne/ModalOne.css";

const ModalThree = ({ handleSelectQuestion }) => {
  return (
      <div className="modal">
        <h1>Escolha sua comida preferida</h1>
        <div className="modal-div">
          <OptionQuestionButton
            title={"Pizza3"}
            img={"/imgs/modal1/pizza.png"}
            alt={"imagem de uma pizza"}
            onClick={() => handleSelectQuestion("optionOne", 4)}
          />
          <OptionQuestionButton
            title={"Hamburguer3"}
            img={"/imgs/modal1/hamburguer.png"}
            alt={"imagem de um hamburguer"}
            onClick={() => handleSelectQuestion("optionTwo", 4)}
          />
        </div>
        <div className="modal-div">
          <OptionQuestionButton
            title={"Massa3"}
            img={"/imgs/modal1/massa.png"}
            alt={"imagem de uma massa"}
            onClick={() => handleSelectQuestion("optionThree", 4)}
          />
          <OptionQuestionButton
            title={"Estrogonofe3"}
            img={"/imgs/modal1/estrogonofe.png"}
            alt={"imagem de um estrogonofe"}
            onClick={() => handleSelectQuestion("optionFour", 4)}
          />
        </div>
      </div>
  );
};

export default ModalThree;