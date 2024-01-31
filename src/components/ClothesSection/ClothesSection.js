import ItemCard from "../ItemCard/ItemCard";

const ClothesSection = ({ clothingItems, handleCreateModal, onSelectCard }) => {
  return (
    <div className="clothes__section">
      <div className="Clother__section">
        <p className="clothes__title">Your items</p>
        <button
          className="clothes__button"
          onClick={handleCreateModal}
          type="text"
        >
          + Add New
        </button>
      </div>
      <div className="clothes__items">
        {clothingItems.map((item) => {
          return (
            <ItemCard key={item._id} item={item} onSelectCard={onSelectCard} />
          );
        })}
      </div>
    </div>
  );
};

export default ClothesSection;
