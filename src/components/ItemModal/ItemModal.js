import "./ItemModal.css";

const ItemModal = ({ selectedCard, onClose, onCardDelete }) => {
  return (
    <div className={` modal `}>
      <div className="modal__content">
        <button
          type="button"
          onClick={onClose}
          className="preview_close-btn"
        ></button>
        <img alt={selectedCard.name} src={selectedCard.imageUrl}></img>
        <div className="modal__item-name">{selectedCard.name}</div>
        <div>Weather Type:{selectedCard.weather}</div>
        <button
          className="delete__button"
          onClick={() => onCardDelete(selectedCard)}
        >
          Delete Item
        </button>
      </div>
    </div>
  );
};
export default ItemModal;
