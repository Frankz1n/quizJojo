import './ShowStandResult.css'

const ShowStandResult = ({title, img, alt, description, onClick}) => {

  return (
    <div className="modal">
      <h1>{title}</h1>
      <img
        src={img}
        alt={alt}
        className="modal-img"
      />
      <p className='modal-paragraph'>{description}</p>
      <button onClick={onClick}>Refazer teste</button>
    </div>
  )
}

export default ShowStandResult