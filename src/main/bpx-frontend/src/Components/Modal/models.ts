import { ReactNode } from "react";

export interface UseModal {
    isModalActive: boolean;
    // toggleModal: any;
    toggleModal(content?: (JSX.Element | boolean)): void;
    modalContent: (string | boolean);
}

export interface ModalProviderProp {
    children: ReactNode;
    showClearModal: boolean;
}