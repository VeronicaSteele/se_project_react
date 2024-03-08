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
        <img
          className="modal__image"
          alt={selectedCard.name}
          src={selectedCard.imageUrl}
        ></img>
        <h3 className="modal__item-name">{selectedCard.name}</h3>
        <div className="weather__type">
          Weather Type:{selectedCard.weather}
          <button
            className="delete__button"
            onClick={() => onCardDelete(selectedCard)}
          >
            Delete Item
          </button>
        </div>
      </div>
    </div>
  );
};
export default ItemModal;
