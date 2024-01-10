const ItemCard = ({ item, onSelectCard }) => {
  return (
    <div>
      <div id="img-div">
        <img
          src={item.link}
          className="card__image"
          onClick={onSelectCard}
        ></img>
      </div>
      <div className="card__name">{item.name}</div>
    </div>
  );
};

export default ItemCard;