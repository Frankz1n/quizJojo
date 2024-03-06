import './ShowStandResult.css'

const ShowStandResult = ({title, img, alt, description, onClick}) => {

  return (
    <div className="modal-stand">
      <h1>{title}</h1>
      <img
        src={img}
        alt={alt}
        className="modal-img"
      />
      <p>{description}</p>
      <button onClick={onClick}>Refazer teste</button>
    </div>
  )
}

export default ShowStandResult