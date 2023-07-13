import React, { type ReactNode } from 'react';

interface ModalProps {
  children?: ReactNode;
  className?: string;
  open?: boolean;
}

interface ModalContainerProps extends ModalProps {
  style?: { backgroundImage: string };
}

function ModalContainer({ children, className = '',style }: ModalContainerProps) {
  return (
    <div className={`rounded-2xl bg-neutral-800 ${className}`} style={{...style}}>
      <div className=' w-full h-full rounded-xl'>
        {children}
      </div>
    </div>
  );
}

function ModalHeader({ children, className = '' }: ModalProps) {
  return <div className={`${className}`}>{children}</div>;
}

function ModalTitle({ children, className = '' }: ModalProps) {
  return <h2 className={`text-5xl md:text-7xl 2xl:text-9xl ${className}`}>{children}</h2>;
}

function ModalContent({ children, className = '' }: ModalProps) {
  return <div className={`${className}`}>{children}</div>;
}

function ModalOverlay({ children, open, className = '' }: ModalProps) {
  return (
    <div className={`fixed top-0 left-0 w-screen h-screen z-40 flex justify-center items-center ${className}`}>
      {open && (
        <div
          role="dialog"
          className="fixed z-10 inset-0 overflow-y-auto p-5 bg-neutral-800 bg-opacity-75"
          aria-labelledby="modal-title"
          aria-modal="true"
        >
          {children}
        </div>
      )}
    </div>
  );
}

export {
  ModalTitle,
  ModalContent,
  ModalHeader,
  ModalContainer,
  ModalOverlay
};
