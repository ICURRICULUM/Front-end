import React from 'react';

import RightArrow from '@assets/signUp/rightArrow.svg';
import EditIcon from '@assets/signUp/stepItem/editIcon.svg';
import MailIcon from '@assets/signUp/stepItem/mailIcon.svg';
import LaughIcon from '@assets/signUp/stepItem/laughIcon.svg';
import ColorMailIcon from '@assets/signUp/stepItem/colorMailIcon.svg';
import ColorEditIcon from '@assets/signUp/stepItem/colorEditIcon.svg';
import ColorLaughIcon from '@assets/signUp/stepItem/colorLaughIcon.svg';

interface StepItemProps {
  currentIndex: number;
}

const StepItem: React.FC<StepItemProps> = ({ currentIndex }) => {
  const stepItem = [
    { index: 1, title: '약관 및 메일 인증', colorIcon: ColorMailIcon, icon: MailIcon },
    { index: 2, title: '필수정보 입력', colorIcon: ColorEditIcon, icon: EditIcon },
    { index: 3, title: '회원가입 완료', colorIcon: ColorLaughIcon, icon: LaughIcon },
  ];

  return (
    <div className="mb-14 flex flex-col items-center space-y-5 bg-[#F5F5F5] py-20 pt-40">
      <p className="text-2xl font-semibold">회원가입</p>
      <div className="flex flex-row">
        {stepItem.map((step) => (
          <div key={step.index} className="flex flex-row items-center">
            <div className="flex flex-col items-center space-y-2">
              <div
                className={`rounded-full border p-5 ${
                  step.index <= currentIndex ? 'border-[#005BAC]' : 'border-[#757575]'
                } ${step.index === currentIndex && 'shadow-icon'}`}
              >
                <img src={step.index <= currentIndex ? step.colorIcon : step.icon} />
              </div>
              <p
                className={`text-xs font-normal ${
                  step.index <= currentIndex ? 'text-[#005BAC]' : 'text-[#757575]'
                } ${step.index === currentIndex && 'font-semibold'}`}
              >
                {step.title}
              </p>
            </div>

            {step.index < stepItem.length && (
              <img src={RightArrow} alt="Arrow Icon" className="px-3.5" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepItem;
