import React, { type ReactNode } from 'react';

interface ModalProps {
  children?: ReactNode;
  className?: string;
  onClose?: () => void;
}

function ModalContainer({ children, className = '' }: ModalProps) {
  return (
    <div className={`rounded-2xl bg-neutral-800 ${className}`}>
      <div className=' w-full h-full rounded-xl p-6'>
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

function ModalOverlay({ children, className = '', onClose }: ModalProps) {
  return (
    <div className={`fixed top-0 left-0 w-screen h-screen z-40 flex justify-center items-center bg-neutral-800 bg-opacity-75 ${className}`}>
        <button className="modal-close-button absolute top-5 left-5 rounded-full bg-neutral-700/50 p-1 " onClick={onClose}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M12 10.586L6.707 5.293a1 1 0 0 0-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 1 0 1.414 1.414L12 13.414l5.293 5.293a1 1 0 0 0 1.414-1.414L13.414 12l5.293-5.293a1 1 0 0 0-1.414-1.414L12 10.586z" />
            </svg>
        </button>
        {children}
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
