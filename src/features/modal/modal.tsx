/* eslint-disable no-unused-vars */
import React, { useEffect, useMemo } from 'react';
import { useContext } from 'react';
import Modal from 'react-modal';

import { X } from '../../assets/svgs/X';
import { MODALS } from '../../constants/modals';
import { MainContext } from '../../context/mainContext';
import { TModalTypes } from '../../types';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    background: 'rgba(255, 255, 255, 0.44)',
    backdropFilter: 'blur(6px)',
  },
};
Modal.setAppElement('#root');
const ModalWrapper: React.FC = () => {
  const { modal, setModal } = useContext(MainContext);
  const Component = useMemo(() => {
    if (modal) {
      return MODALS[modal as TModalTypes].component;
    }
  }, [modal]);
  useEffect(() => {
    if (modal) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [modal]);

  return (
    <Modal
      isOpen={Boolean(modal)}
      onRequestClose={() => setModal('')}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className="modalCloser" onClick={() => setModal('')}>
        <X />
      </div>
      {modal && <Component />}
    </Modal>
  );
};
export default ModalWrapper;
