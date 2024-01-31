import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ handleCloseModal, onAddItem, isOpen }) => {
  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const [link, setUrl] = useState("");
  const handleUrlChange = (e) => {
    console.log(e.target.value);
    setUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefaul();
    onAddItem({ name, link });
  };
  return (
    <ModalWithForm
      title="New Garment"
      onclose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <div className="modal__overlay">
        <label className="modal__input-label">
          Name
          <input
            className="modal__input"
            type="text"
            name="name"
            minLength="1"
            maxLength="30"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
          />
        </label>
        <label className="modal__input-label">
          Image
          <input
            className="modal__input"
            type="url"
            name="link"
            minLength="1"
            maxLength="30"
            placeholder="Image URL"
            value={link}
            onChange={handleUrlChange}
            // onChange={(input) => handleOnChange(input.target.value)}
          />
        </label>
        <p>Select the weather type:</p>
        <div className="weather_selector">
          <div className="modal__buttons">
            <input
              type="radio"
              id="hot"
              name="weather"
              value="hot"
              className="input__button"
            />
            <label htmlFor="hot">Hot</label>
          </div>
          <div>
            <input
              type="radio"
              id="warm"
              name="weather"
              value="warm"
              className="input__button"
            />
            <label htmlFor="warm">Warm</label>
          </div>
          <div>
            <input
              type="radio"
              id="cold"
              name="weather"
              value="cold"
              className="input__button"
            />
            <label htmlFor="cold">Cold</label>
          </div>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
