import { useState } from 'react';
import { UseModal } from './models';

export const useModal = (): UseModal => {
  
  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<string | boolean>('I\'m the Modal Content');

//   console.log('Usemodal Called');

  const toggleModal = (content = false): void => {

    // console.log('toggleModal', content);

    setIsModalActive(!isModalActive);
    if (content) {
      setModalContent(content);
    }
  };

  return { isModalActive, toggleModal, modalContent };
};

export default useModal;
