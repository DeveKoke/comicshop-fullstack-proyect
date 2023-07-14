

const Novelties = ({title, img, price}) => {
  return (
    <div className="sliderCard">
      <span>{price}€</span>
        <img src={img} alt={`comic ${title}`}/>
        <h2>{title}</h2>
    </div>


  )
}

export default Novelties;
