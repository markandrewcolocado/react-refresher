import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

// The name of the function should start with a capital character
// Because when we later use this function as a component in our HTML code
//   then it will have to start with a capital character there as well to differentiate it with the built-in HTML elements
function Todo(props) {
  // The first element is the initial value of the state
  // The second element is the function that allows you to change the state value
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
        {/* Double ampersand (logical AND), if both values are true, then the second value will be returned */}
        {modalIsOpen && (
          <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
        )}
        {modalIsOpen && <Backdrop onClickAway={closeModalHandler} />}
      </div>
    </div>
  );
}

export default Todo;
