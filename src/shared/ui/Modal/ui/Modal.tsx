import { FC, ReactNode } from 'react';
import { Button } from '../../Button';
import { DeleteIcon } from '../../Icons';

interface ModalProps {
  closeHandler: () => void;
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ closeHandler, children }) => {
  return (
    <div className="w-full h-full flex items-center justify-center fixed top-0 left-0 z-10 bg-[rgba(0,0,0,0.5)]">
      <div className="bg-white p-7 rounded-xl relative">
        {children}
        <Button
          onClick={closeHandler}
          className="absolute top-1 right-1"
          isIconOnly
        >
          <DeleteIcon />
        </Button>
      </div>
    </div>
  );
};

export default Modal;
