import "./ModalWithForm.css";

const ModalWithForm = ({
  children,
  buttonText = "Add Garment",
  title,
  onclose,
  name,
}) => {
  // console.log("ModalWithForm");
  return (
    <div className={` modal modal_type_${name}`}>
      <div className="modal__content">
        <button
          className="close_button"
          type="button"
          onClick={onclose}
        ></button>
        <h3> {title}</h3>
        <form>
          {children}
          <button className="submit_button" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
