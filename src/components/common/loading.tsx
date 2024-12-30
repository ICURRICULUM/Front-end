import React from 'react';
import { FadeLoader } from 'react-spinners';

const LoadingComponent: React.FC = () => {
  return (
    <div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-modalBack">
      <FadeLoader />
    </div>
  );
};

export default LoadingComponent;
