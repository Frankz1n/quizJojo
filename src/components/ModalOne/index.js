import OptionQuestionButton from "../OptionQuestionButton";
import "./ModalOne.css";

const ModalOne = ({ handleSelectQuestion }) => {
    return (
        <div className="modal">
          <h1>Escolha sua comida preferida</h1>
          <div className="modal-div">
            <OptionQuestionButton
              title={'Pizza'}
              img={"/imgs/modal1/pizza.png"}
              alt={"imagem de uma pizza"}
              onClick={() => handleSelectQuestion("optionOne", 2)}
            />
            <OptionQuestionButton
              title={'Hamburguer'}
              img={"/imgs/modal1/hamburguer.png"}
              alt={"imagem de um hamburguer"}
              onClick={() => handleSelectQuestion("optionTwo", 2)}
            />
          </div>
          <div className="modal-div">
            <OptionQuestionButton
              title={'Massa'}
              img={"/imgs/modal1/massa.png"}
              alt={"imagem de uma massa"}
              onClick={() => handleSelectQuestion("optionThree", 2)}
            />
            <OptionQuestionButton
              title={'Estrogonofe'}
              img={"/imgs/modal1/estrogonofe.png"}
              alt={"imagem de um estrogonofe"}
              onClick={() => handleSelectQuestion("optionFour", 2)}
            />
          </div>
        </div>
    );
};

export default ModalOne;