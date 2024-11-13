import React from 'react';

import PlusIcon from '@assets/myPage/plus.svg';
import SettingIcon from '@assets/myPage/setting.svg';

interface CheckListProps {
  checkListData: {
    checkListId: number;
    isDone: boolean;
    title: string;
  }[];
}

const CheckList: React.FC<CheckListProps> = ({ checkListData }) => {
  return (
    <div className="flex w-full flex-col space-y-10 rounded-five border border-black bg-white p-10">
      <div className="flex flex-row justify-between">
        <h3>체크리스트</h3>
        <img src={PlusIcon} />
      </div>

      <div className="flex flex-col space-y-3">
        {checkListData.map((check) => (
          <div key={check.checkListId} className="flex flex-row items-center justify-between">
            <div className="space-x-2">
              <input type="checkbox" id={`check-${check.checkListId}`} />
              <label htmlFor={`check-${check.checkListId}`}>{check.title}</label>
            </div>
            <img src={SettingIcon} className="cursor-pointer px-2" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckList;
