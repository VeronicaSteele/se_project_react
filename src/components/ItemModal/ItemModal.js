import "./ItemModal.css";

const ItemModal = ({ selectedCard, onclose }) => {
  console.log("item Modal");
  return (
    <div className={` modal `}>
      <div className="modal__content">
        <button
          type="button"
          onClick={onclose}
          className="preview_close-btn"
        ></button>
        <img src={selectedCard.link}></img>
        <div>{selectedCard.name}</div>
        <div>Weather Type:{selectedCard.weather}</div>
      </div>
    </div>
  );
};
export default ItemModal;
