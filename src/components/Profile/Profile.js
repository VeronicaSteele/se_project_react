import SideBar from "../Sidebar/Sidebar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

const Profile = ({ onSelectCard, onCreateModal, cards }) => {
  return (
    <div className="profile">
      <div className="profile__sidebar">
        <SideBar />
      </div>
      <div className="profile__clothesSection">
        <ClothesSection
          cards={cards}
          onSelectCard={onSelectCard}
          handleCreateModal={onCreateModal}
        />
      </div>
    </div>
  );
};

export default Profile;
