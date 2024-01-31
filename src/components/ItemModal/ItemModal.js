import "./ItemModal.css";

const ItemModal = ({ selectedCard, onClose, onCardDelete }) => {
  // console.log("item Modal");
  // can I use a hook to delete an image?
  return (
    <div className={` modal `}>
      <div className="modal__content">
        <button
          type="button"
          onClick={onClose}
          className="preview_close-btn"
        ></button>
        <img alt={selectedCard.name} src={selectedCard.link}></img>
        <div className="modal__item-name">{selectedCard.name}</div>
        <div>Weather Type:{selectedCard.weather}</div>
        <button className="delete__button" onClick={onCardDelete}>
          Delete Item
        </button>
      </div>
    </div>
  );
};
export default ItemModal;
