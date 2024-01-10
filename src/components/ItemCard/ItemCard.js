const ItemCard = ({ x }) => {
  return (
    <div>
      <div id="img-div">
        <img src={x.link} className="card__image"></img>
      </div>
      <div className="card__name">{x.name}</div>
    </div>
  );
};

export default ItemCard;
