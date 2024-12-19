import React from 'react';

import DownArrow from '@assets/checkRequirement/downArrow.svg';
import RightArrow from '@assets/checkRequirement/rightArrow.svg';

interface SmallStatusProps {
  isOpened: boolean;
  handleOpen: () => void;
  openModal: () => void;
  title: string;
  value: {
    current: number;
    total: number;
  };
}

const SmallStatus: React.FC<SmallStatusProps> = ({
  isOpened,
  handleOpen,
  openModal,
  title,
  value,
}) => {
  const percentage = value.total !== 0 ? (value.current / value.total) * 100 : 100;

  return (
    <div
      className={`flex w-[308px] flex-col rounded-five border border-black bg-white p-4 pb-6 transition-all duration-300 ${
        isOpened ? 'h-auto' : 'h-[112px]'
      }`}
    >
      <div className="mb-4 flex flex-row items-center space-x-2">
        <button onClick={handleOpen}>
          <img src={isOpened ? DownArrow : RightArrow} className="cursor-pointer" />
        </button>
        <p className="font-semibold">{title}</p>
      </div>

      <div className="relative mx-6 min-h-[30px] rounded-[20px] border border-black">
        <div
          className={`absolute left-0 top-0 h-full bg-small-gradient ${
            percentage === 100 ? 'rounded-[20px]' : 'rounded-l-[20px]'
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>

      {isOpened && (
        <div className="mt-6 space-y-4 px-6">
          <ol className="mx-10 space-y-2">
            <li className="flex flex-row">
              <p>
                {value.current} / {value.total} 학점
              </p>
            </li>
          </ol>

          <button
            onClick={openModal}
            className="w-full rounded-sm bg-[#005BAC] p-1 font-semibold text-white"
          >
            미이수 과목 찾기
          </button>
        </div>
      )}
    </div>
  );
};

export default SmallStatus;
