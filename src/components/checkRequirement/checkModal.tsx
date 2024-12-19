import React, { useEffect } from 'react';

import XButton from '@assets/checkRequirement/xButton.svg';

interface CheckModalProps {
  isVisible: boolean;
  closeModal: () => void;
  title: string;
}

const CheckModal: React.FC<CheckModalProps> = ({ isVisible, closeModal, title }) => {
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // 컴포넌트가 언마운트될 때 overflow 스타일을 초기화
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isVisible]);

  return (
    isVisible && (
      <div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-modalBack">
        <div className="flex h-[516px] w-[800px] flex-col items-center space-y-10 border border-black bg-white p-4">
          <img src={XButton} onClick={closeModal} className="flex cursor-pointer items-end" />
          <p className="text-center text-2xl font-semibold">{title}</p>
        </div>
      </div>
    )
  );
};

export default CheckModal;
