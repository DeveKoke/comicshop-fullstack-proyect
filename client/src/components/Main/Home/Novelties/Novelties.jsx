

const Novelties = ({title, img, price}) => {
  return (
    <div className="sliderCard">
      <span>{price}€</span>
        <img src={img} alt={`comic ${title}`}/>
        <h3>{title}</h3>
    </div>


  )
}

export default Novelties;
