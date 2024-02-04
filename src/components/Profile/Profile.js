import SideBar from "../Sidebar/Sidebar";
import ClothesSection from "../ClothesSection/ClothesSection";

const Profile = ({ onSelectCard, onCreateModal, cards }) => {
  return (
    <div className="profile">
      <div className="profile__sidebar">
        <SideBar />
      </div>
      <div className="profile__clothesSection">
        <ClothesSection
          clothingItems={cards}
          onSelectCard={onSelectCard}
          onCreateModal={onCreateModal}
        />
      </div>
    </div>
  );
};

export default Profile;
