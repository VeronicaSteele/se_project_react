import "./ItemCard.css";

const ItemCard = ({ item, onSelectCard }) => {
  return (
    <h3 className="card">
      <img
        // key={item._id}
        alt={item.name}
        src={item.imageUrl}
        className="card__image"
        onClick={() => onSelectCard(item)}
      />
      <div className="card__name">{item.name}</div>
    </h3>
  );
};

export default ItemCard;
