import React from 'react';

interface MyInfoProps {
  myInfoData: {
    name: string;
    email: string;
    joinYear: number;
    majorList: {
      majorType: string;
      departmentName: string;
    }[];
  };
}

const MyInfo: React.FC<MyInfoProps> = ({ myInfoData }) => {
  return (
    <div className="flex w-full flex-col space-y-10 rounded-five border border-black p-10">
      <div className="flex flex-row justify-between">
        <p className="text-2xl font-semibold">내 정보</p>
      </div>

      <div className="flex flex-row space-x-10">
        <div className="flex flex-col space-y-3 font-normal text-[#757575]">
          <p>이름</p>
          <p>학번</p>
          <p>주전공</p>
          {/* <p>다중전공</p> */}
          <p>이메일</p>
        </div>

        <div className="flex flex-col space-y-3 font-normal">
          <p>{myInfoData.name || '이름'}</p>
          <p>{myInfoData.joinYear}학번</p>
          <p>
            {myInfoData.majorList.map((item, index) => (
              <span key={index}>{item.departmentName}</span>
            )) || '컴퓨터공학과'}
          </p>
          {/* <p>{myInfoData.doubleMajor.join(', ')}</p> */}
          <p>{myInfoData.email}</p>
        </div>
      </div>
    </div>
  );
};

export default MyInfo;
