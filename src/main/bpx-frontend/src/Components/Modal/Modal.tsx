import './Modal.scss';
import { ReactPortal, useContext } from 'react';
import ReactDOM from 'react-dom';

// Local Imports
import { ModalContext } from './ModalContext';

// Import Models
import { UseModal } from './models';

// 3rd Party Libraries
import ClearIcon from '@material-ui/icons/Clear';

const Modal = (props: {showClearModal: boolean}): (ReactPortal | null) => {

  const { modalContent, toggleModal, isModalActive }: UseModal = useContext<UseModal>(ModalContext) as UseModal;

  // console.log('Modal', isModalActive);

  const modalElement: JSX.Element = (
    <div className="modal-container">
      <div>

        {
          props.showClearModal ?
          <div className="modal-clear-container">
            <button type="button" className="modal-clear-button" onClick={() => toggleModal()}>
              <ClearIcon/>
            </button>
          </div>
          : null
        }

        {modalContent}
      
      </div>
    </div>
  );

  return isModalActive ? ReactDOM.createPortal(modalElement, document.querySelector('#modal-root')!) : null;
};

export default Modal;
