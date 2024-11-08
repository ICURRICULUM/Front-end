import React from 'react';

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
  const compareCredit = (current: number, total: number) => {
    return current >= total;
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <p>주전공</p>
        <p>{infoData.major}</p>
        <p>다중전공</p>
        <p>{infoData.doubleMajor}</p>
      </div>

      <div className="flex flex-row">
        <div className="flex flex-col items-center space-y-2 rounded-[5px] border border-black bg-white px-10 py-8">
          <p>졸업이수학점</p>
          <p className="flex flex-row text-[#757575]">
            <p
              className={`${
                compareCredit(infoData.currentCredit, infoData.totalCredit)
                  ? 'text-[#4285F4]'
                  : 'text-[#D32F2F]'
              }`}
            >
              {infoData.currentCredit}{' '}
            </p>
            / {infoData.totalCredit}
          </p>
        </div>

        <div className="flex flex-col items-center space-y-2 rounded-[5px] border border-black bg-white px-10 py-8">
          <p>전공이수학점</p>
          <p className="flex flex-row text-[#757575]">
            <p
              className={`${
                compareCredit(infoData.currentMajorCredit, infoData.majorTotalCredit)
                  ? 'text-[#4285F4]'
                  : 'text-[#D32F2F]'
              }`}
            >
              {infoData.currentMajorCredit}
            </p>
            / {infoData.majorTotalCredit}
          </p>
        </div>

        <div className="flex flex-col items-center space-y-2 rounded-[5px] border border-black bg-white px-10 py-8">
          <p>다중전공이수학점</p>
          <p className="flex flex-row text-[#757575]">
            <p
              className={`${
                compareCredit(infoData.currentDoubleMajorCredit, infoData.doubleMajorTotalCredit)
                  ? 'text-[#4285F4]'
                  : 'text-[#D32F2F]'
              }`}
            >
              {infoData.currentDoubleMajorCredit}
            </p>
            / {infoData.doubleMajorTotalCredit}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
