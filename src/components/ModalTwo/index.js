import OptionQuestionButton from "../OptionQuestionButton";
import "../ModalOne/ModalOne.css";

const ModalTwo = ({ handleSelectQuestion }) => {
  return (
      <div className="modal">
        <h1>Escolha um super-poder:</h1>
        <div className="modal-div">
          <OptionQuestionButton
            title={"Super força"}
            img={"/imgs/modal2/forca.png"}
            alt={"imagem de uma formiga segurando um galho bem maior que ela."}
            onClick={() => handleSelectQuestion("optionOne", 3)}
          />
          <OptionQuestionButton
            title={"Controlar o tempo"}
            img={"/imgs/modal2/controlar tempo.png"}
            alt={"imagem de um grande relógio sendo erguido por mãos femininas."}
            onClick={() => handleSelectQuestion("optionTwo", 3)}
          />
        </div>
        <div className="modal-div">
          <OptionQuestionButton
            title={"Voar"}
            img={"/imgs/modal2/voar.png"}
            alt={"imagem de pássaros voando com o pôr do sol ao fundo."}
            onClick={() => handleSelectQuestion("optionThree", 3)}
          />
          <OptionQuestionButton
            title={"Ler mentes"}
            img={"/imgs/modal2/ler mente.png"}
            alt={"desenho de duas pessoas com ênfase em seus cérebros, ambos conectados, representando a leitura de mente."}
            onClick={() => handleSelectQuestion("optionFour", 3)}
          />
        </div>
      </div>
  );
};

export default ModalTwo;
