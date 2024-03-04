const ShowStandResult = ({title, img, alt, description, onClick}) => {

  return (
    <div>
      <h2>{title}</h2>
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