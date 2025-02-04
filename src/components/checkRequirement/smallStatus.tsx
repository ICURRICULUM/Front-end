import React, { useState } from 'react';
import {
  CoreItem,
  SWAiItem,
  CreativityItem,
  MajorRequiredItem,
  GeneralRequiredItem,
} from '@type/checkGraduation/types';

import CheckModal from './checkModal';

import DownArrow from '@assets/checkRequirement/downArrow.svg';
import RightArrow from '@assets/checkRequirement/rightArrow.svg';

interface SmallStatusProps {
  isOpened: boolean;
  handleOpen: () => void;
  title: string;
  value: SWAiItem | CreativityItem | CoreItem | GeneralRequiredItem | MajorRequiredItem;
}

const SmallStatus: React.FC<SmallStatusProps> = ({ isOpened, handleOpen, title, value }) => {
  const [isCheckModalOpen, setIsCheckModalOpen] = useState<boolean>(false);

  const percentage = Math.min(
    value.requiredCredit !== 0 ? (value.completedCredit / value.requiredCredit) * 100 : 100,
    100,
  );

  const getUncompletedData = () => {
    if ('uncompletedArea' in value && value.uncompletedArea?.length > 0) {
      return value.uncompletedArea;
    } else if ('uncompletedCourseList' in value && value.uncompletedCourseList?.length > 0) {
      return value.uncompletedCourseList;
    } else if ('uncompletedCourseSet' in value && value.uncompletedCourseSet?.length > 0) {
      return value.uncompletedCourseSet;
    }
    return null;
  };

  const uncompletedData = getUncompletedData();

  return (
    <>
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
            <ul className="space-y-2">
              <li className="flex flex-row justify-between">
                <span className="flex flex-row">목표 학점</span>
                <span>{value.requiredCredit}</span>
              </li>

              <li className="flex flex-row justify-between">
                <span className="flex flex-row">이수 학점</span>
                <span className={`${!value.isClear && 'text-[#D32F2F]'}`}>
                  {value.completedCredit}
                </span>
              </li>
            </ul>

            {!value.isClear && uncompletedData && (
              <button
                onClick={() => setIsCheckModalOpen(true)}
                className="w-full rounded-sm bg-[#005BAC] p-1 font-semibold text-white"
              >
                {title === '핵심 교양' ? '미이수 영역 찾기' : '미이수 과목 찾기'}
              </button>
            )}
          </div>
        )}
      </div>

      <CheckModal
        isVisible={isCheckModalOpen}
        closeModal={() => setIsCheckModalOpen(false)}
        title={title}
        value={uncompletedData}
      />
    </>
  );
};

export default SmallStatus;
