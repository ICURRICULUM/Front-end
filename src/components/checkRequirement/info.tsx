import React from 'react';
import { useNavigate } from 'react-router-dom';

interface InfoProps {
  infoData: {
    major: string;
    doubleMajor: string;
    totalCredit: number;
    currentCredit: number;
    majorTotalCredit: number;
    currentMajorCredit: number;
    doubleMajorTotalCredit: number;
    currentDoubleMajorCredit: number;
  };
}

const Info: React.FC<InfoProps> = ({ infoData }) => {
  const navigate = useNavigate();

  const compareCredit = (current: number, total: number) => {
    return current >= total;
  };

  return (
    <div className="flex flex-col items-end space-y-4">
      <div className="flex w-full flex-row">
        <div className="flex w-[506px] flex-row space-x-2.5 rounded-five border border-black bg-white p-4">
          <p className="text-[#757575]">주전공</p>
          <p>{infoData.major}</p>
        </div>
        {/* <div className="flex w-1/2 flex-row space-x-2.5 rounded-r-five border border-l-0 border-black bg-white p-4">
          <p>다중전공</p>
          <p>{infoData.doubleMajor}</p>
        </div> */}
      </div>

      <div className="flex flex-row space-x-4">
        <div className="flex h-[118px] w-[158px] flex-col items-center justify-center space-y-2 rounded-five border border-black bg-white">
          <p>졸업이수학점</p>
          <p className="flex flex-row items-center space-x-1 text-[#757575]">
            <span
              className={`text-2xl font-semibold ${
                compareCredit(infoData.currentCredit, infoData.totalCredit)
                  ? 'text-[#4285F4]'
                  : 'text-[#D32F2F]'
              }`}
            >
              {infoData.currentCredit}
            </span>
            <span>/ {infoData.totalCredit}</span>
          </p>
        </div>

        <div className="flex h-[118px] w-[158px] flex-col items-center justify-center space-y-2 rounded-five border border-black bg-white">
          <p>전공이수학점</p>
          <p className="flex flex-row items-center space-x-1 text-[#757575]">
            <span
              className={`text-2xl font-semibold ${
                compareCredit(infoData.currentMajorCredit, infoData.majorTotalCredit)
                  ? 'text-[#4285F4]'
                  : 'text-[#D32F2F]'
              }`}
            >
              {infoData.currentMajorCredit}
            </span>
            <span>/ {infoData.majorTotalCredit}</span>
          </p>
        </div>

        <div className="flex h-[118px] w-[158px] flex-col items-center justify-center space-y-2 rounded-five border border-black bg-white">
          <p>다중전공이수학점</p>
          <p className="flex flex-row items-center space-x-1 text-[#757575]">
            <span
              className={`text-2xl font-semibold ${
                compareCredit(infoData.currentDoubleMajorCredit, infoData.doubleMajorTotalCredit)
                  ? 'text-[#4285F4]'
                  : 'text-[#D32F2F]'
              }`}
            >
              {infoData.currentDoubleMajorCredit}
            </span>
            <span>/ {infoData.doubleMajorTotalCredit}</span>
          </p>
        </div>
      </div>

      <button
        onClick={() => navigate('/mypage')}
        className="rounded-sm bg-[#005BAC] px-5 py-1 font-semibold text-white"
      >
        내 정보 수정하기
      </button>
    </div>
  );
};

export default Info;
