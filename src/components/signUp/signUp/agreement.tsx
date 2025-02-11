import React from 'react';

import AgreementIcon from '@assets/signUp/agreement.svg';

interface AgreementProps {
  value: boolean;
  setValue: () => void;
}

const Agreement: React.FC<AgreementProps> = ({ value, setValue }) => {
  return (
    <div className="flex flex-col space-y-9">
      <div className="flex flex-row space-x-4">
        <img src={AgreementIcon} />
        <p className="text-xl font-semibold">약관 동의</p>
      </div>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row space-x-2">
          <input type="checkbox" id="agree" checked={value} onChange={setValue} />
          <label htmlFor="agree">개인정보 수집 및 정보이용에 동의합니다.</label>
        </div>

        <button
          onClick={() =>
            window.open(
              'https://five-diamond-cfe.notion.site/140899c51ba04dd9b187d023436c9a79?pvs=4',
              '_blank',
            )
          }
          className="text-sm font-semibold text-[#757575] underline"
        >
          약관 확인하기 {'>'}
        </button>
      </div>
    </div>
  );
};

export default Agreement;
