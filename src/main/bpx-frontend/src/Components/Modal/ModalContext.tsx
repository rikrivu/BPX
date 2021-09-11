import { Context, createContext } from 'react';
import useModal from './UseModalHook';
import Modal from './Modal';

import { ModalProviderProp, UseModal } from './models';

let ModalContext: Context<UseModal>;
const { Provider }: Context<UseModal> = (ModalContext = createContext<UseModal | null>(null) as Context<UseModal>);

const ModalProvider = ({ children, showClearModal = true }: ModalProviderProp): JSX.Element => {
  
    // console.log('ModalCOntext Invoked');
  
  const { isModalActive, toggleModal, modalContent }: UseModal = useModal();

  return (
    <Provider value={{ isModalActive, toggleModal, modalContent }}>
      <Modal showClearModal={showClearModal}/>
      {children}
    </Provider>
  );
};

export { ModalContext, ModalProvider };
