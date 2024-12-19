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
      <div className="flex flex-col space-y-4">
        <textarea
          className="min-h-[400px] min-w-[600px] resize-none rounded-[5px] border border-[#757575] p-4"
          value={'안녕하세요'}
          readOnly
        />
        <div className="flex flex-row space-x-2">
          <input type="checkbox" id="agree" checked={value} onChange={setValue} />
          <label htmlFor="agree">개인정보 수집 및 정보이용에 동의합니다.</label>
        </div>
      </div>
    </div>
  );
};

export default Agreement;
