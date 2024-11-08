import React from 'react';

import PencilIcon from '@assets/myPage/pencil.svg';

interface MyInfoProps {
  myInfoData: {
    name: string;
    admissionYear: number;
    major: string;
    doubleMajor: string[];
    email: string;
  };
}

const MyInfo: React.FC<MyInfoProps> = ({ myInfoData }) => {
  return (
    <div className="flex flex-col space-y-10 rounded-[5px] border border-black p-10">
      <div className="flex flex-row justify-between">
        <h3>내 정보</h3>
        <img src={PencilIcon} />
      </div>

      <div className="flex flex-row space-x-10">
        <div className="flex flex-col font-normal text-[#757575]">
          <p>이름</p>
          <p>학번</p>
          <p>주전공</p>
          <p>다중전공</p>
          <p>이메일</p>
        </div>

        <div className="flex flex-col font-normal">
          <p>{myInfoData.name}</p>
          <p>{myInfoData.admissionYear}학번</p>
          <p>{myInfoData.major}</p>
          <p>{myInfoData.doubleMajor.join(', ')}</p>
          <p>{myInfoData.email}</p>
        </div>
      </div>
    </div>
  );
};

export default MyInfo;
