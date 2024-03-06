import OptionQuestionButton from "../OptionQuestionButton";
import "../ModalOne/ModalOne.css";

const ModalTwo = ({ handleSelectQuestion }) => {
  return (
      <div className="modal">
        <h1>Escolha sua comida preferida</h1>
        <div className="modal-div">
          <OptionQuestionButton
            title={"Pizza2"}
            img={"/imgs/modal1/pizza.png"}
            alt={"imagem de uma pizza"}
            onClick={() => handleSelectQuestion("optionOne", 3)}
          />
          <OptionQuestionButton
            title={"Hamburguer2"}
            img={"/imgs/modal1/hamburguer.png"}
            alt={"imagem de um hamburguer"}
            onClick={() => handleSelectQuestion("optionTwo", 3)}
          />
        </div>
        <div className="modal-div">
          <OptionQuestionButton
            title={"Massa2"}
            img={"/imgs/modal1/massa.png"}
            alt={"imagem de uma massa"}
            onClick={() => handleSelectQuestion("optionThree", 3)}
          />
          <OptionQuestionButton
            title={"Estrogonofe2"}
            img={"/imgs/modal1/estrogonofe.png"}
            alt={"imagem de um estrogonofe"}
            onClick={() => handleSelectQuestion("optionFour", 3)}
          />
        </div>
      </div>
  );
};

export default ModalTwo;
