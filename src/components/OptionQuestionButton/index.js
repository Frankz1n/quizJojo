import "../ModalOne/ModalOne.css";

const OptionQuestionButton = ({ title, img, alt, onClick }) => {
  return (
    <button onClick={onClick} className="btn-modal">
      <h2>{title}</h2>
      <img src={img} alt={alt} className="modal-img" />
    </button>
  );
};

export default OptionQuestionButton;
