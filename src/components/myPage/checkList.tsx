import React from 'react';

import PlusIcon from '@assets/myPage/plus.svg';

interface CheckListProps {
  checkListData: {
    checkListId: number;
    isDone: boolean;
    title: string;
  }[];
}

const CheckList: React.FC<CheckListProps> = ({ checkListData }) => {
  return (
    <div className="flex flex-col space-y-10 rounded-[5px] border border-black p-10">
      <div className="flex flex-row justify-between">
        <h3>체크리스트</h3>
        <img src={PlusIcon} />
      </div>

      <div className="flex flex-col">
        {checkListData.map((check) => (
          <div key={check.checkListId} className="flex flex-row items-center justify-between">
            <div>
              <input type="checkbox" id={`check-${check.checkListId}`} />
              <label htmlFor={`check-${check.checkListId}`}>{check.title}</label>
            </div>
            <div>버튼</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckList;
