import React from 'react';
import { Btn } from './Btn';

import './modal.css';

interface ModalComponentProps {
  showModal: boolean;
  closeHandler: () => void;
  title: string;
  children: React.ReactNode;
  titleButton: string;
  onClickButton: () => void;
}

/**
 * Компонет "Модальное окно"
 */
export const Modal = ({
  showModal,
  closeHandler,
  title,
  children,
  titleButton,
  onClickButton,
}: ModalComponentProps): React.ReactElement => {
  if (!showModal) return null;

  return (
    <div className="modal-wrapper">
      <div className="modal-window">
        <button className="modal-close" onClick={closeHandler} />
        <h1 className="modal-header">{title}</h1>
        <div className="modal-body">{children}</div>
        <div className="modal-footer">
          <Btn text={titleButton} onClick={onClickButton} />
        </div>
      </div>
    </div>
  );
};
