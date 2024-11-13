import React from 'react';

import DownArrow from '@assets/checkRequirement/downArrow.svg';

interface LargeStatusProps {
  title: string;
  value: {
    name: string;
    current: number;
    total: number;
  }[];
}

const LargeStatus: React.FC<LargeStatusProps> = ({ title, value }) => {
  const percentage = (value[0].current / value[0].total) * 100;

  return (
    <div className="rounded-five border border-black bg-white p-4">
      <div className="mb-4 flex flex-row items-center space-x-2">
        <img src={DownArrow} className="cursor-pointer" />
        <p className="font-semibold">{title}</p>
      </div>

      <div className="relative mx-10 mb-6 h-[30px] rounded-[20px] border border-black">
        <div
          className={`absolute left-0 top-0 h-full bg-large-gradient ${
            percentage === 100 ? 'rounded-[20px]' : 'rounded-l-[20px]'
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>

      <ol className="mx-10 space-y-2">
        {value.map((data, index) => (
          <li key={index} className="flex flex-row">
            <p>{data.name}</p>
            <p>
              {data.current} / {data.total} 학점
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default LargeStatus;
