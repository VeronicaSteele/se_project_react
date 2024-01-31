import "./ItemCard.css";

const ItemCard = ({ item, onSelectCard }) => {
  return (
    <div>
      <div id="img-div" className="card">
        <img
          // key={item._id}
          alt={item.name}
          src={item.imageUrl}
          className="card__image"
          onClick={() => onSelectCard(item)}
        />
        <div className="card__name">{item.name}</div>
      </div>
    </div>
  );
};

export default ItemCard;
