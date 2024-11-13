import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { majorItem, admissionYearItem } from './itemData';

import MajorSelect from '@components/signUp/majorSelect';
import SelectInputBox from '@components/signUp/selectInputBox';
import AdmissionYearSelect from '@components/signUp/admissionYearSelect';

import MailIcon from '@assets/signUp/mailIcon.svg';
import EditIcon from '@assets/signUp/editIcon.svg';
import PencilIcon from '@assets/signUp/pencil.svg';
import LaughIcon from '@assets/signUp/laughIcon.svg';
import RightArrow from '@assets/signUp/rightArrow.svg';

const InfoInputPage = () => {
  const navigate = useNavigate();

  const stepItem = [
    { index: 1, title: '약관 및 메일 인증', icon: MailIcon },
    { index: 2, title: '필수정보 입력', icon: EditIcon },
    { index: 3, title: '회원가입 완료', icon: LaughIcon },
  ];

  const [name, setName] = useState<string>('');
  const [admissionYear, setAdmissionYear] = useState<number>(0);
  const [major, setMajor] = useState<string>('');
  const [doubleMajor, setDoubleMajor] = useState<string>('');

  return (
    <main className="mb-10 pt-20">
      <div className="mb-14 flex flex-col items-center space-y-5 bg-[#F5F5F5] py-20">
        <p className="text-2xl font-semibold">회원가입</p>
        <div className="flex flex-row">
          {stepItem.map((step) => (
            <div key={step.index} className="flex flex-row items-center">
              <div className="flex flex-col items-center space-y-2">
                <div
                  className={`rounded-full border p-5 ${
                    step.index === 2 ? 'border-[#005BAC] shadow-icon' : 'border-[#757575]'
                  } `}
                >
                  <img src={step.icon} />
                </div>
                <p
                  className={`text-xs ${
                    step.index === 2 ? 'font-semibold text-[#005BAC]' : 'font-normal text-[#757575]'
                  }`}
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

      <div className="flex flex-col">
        <header className="flex flex-row space-x-4">
          <img src={PencilIcon} />
          <p>필수정보 입력</p>
        </header>

        <div className="flex flex-col items-center space-y-5">
          <input
            type="text"
            placeholder="이름을 입력하세요."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <AdmissionYearSelect
            value={admissionYear}
            setValue={setAdmissionYear}
            itemList={admissionYearItem}
          />
          <MajorSelect value={major} setValue={setMajor} itemList={majorItem} />

          {/* <SelectInputBox
            title="다중전공"
            value={doubleMajor}
            setValue={setDoubleMajor}
            itemList={majorItem}
          /> */}

          <button
            onClick={() => navigate('/complete')}
            className="rounded-[5px] bg-[#005BAC] p-4 text-base font-semibold text-white"
          >
            가입하기
          </button>
        </div>
      </div>
    </main>
  );
};

export default InfoInputPage;
