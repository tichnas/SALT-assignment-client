function Card({ title, description, icon }) {
  return (
    <div className='card'>
      <img src={icon} alt='' className='card__icon' />
      <h4 className='card__title'>{title}</h4>
      <p className='card__description'>{description}</p>
    </div>
  );
}

export default Card;
