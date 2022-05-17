import {useState} from 'react'
import Modal from './Modal'
import Backdrop from './Backdrop';

function Todo(props) {
    const [modalIsOpen, SetMadalIsOpen] = useState(false);

    function deleteHandler() {
        SetMadalIsOpen(true);
    }

    function closeModalHanler() {
        SetMadalIsOpen(false);
    }

    return (
      <div>
        <h2>{props.text}</h2>
        <div>
          <button onClick={deleteHandler}>Delete</button>
        </div>
        {modalIsOpen && <Modal onConfirm={closeModalHanler} onCancel={closeModalHanler}/>}
        {modalIsOpen && <Backdrop onClick={closeModalHanler}/>}
      </div>
    );
}

export default Todo;