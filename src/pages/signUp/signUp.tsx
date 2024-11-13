import { useNavigate } from 'react-router-dom';

import EmailIcon from '@assets/signUp/email.svg';
import MailIcon from '@assets/signUp/mailIcon.svg';
import EditIcon from '@assets/signUp/editIcon.svg';
import LaughIcon from '@assets/signUp/laughIcon.svg';
import RightArrow from '@assets/signUp/rightArrow.svg';
import AgreementIcon from '@assets/signUp/agreement.svg';

const SignUpPage = () => {
  const navigate = useNavigate();

  const stepItem = [
    { index: 1, title: '약관 및 메일 인증', icon: MailIcon },
    { index: 2, title: '필수정보 입력', icon: EditIcon },
    { index: 3, title: '회원가입 완료', icon: LaughIcon },
  ];

  return (
    <div className="mb-10 pt-20">
      <div className="mb-14 flex flex-col items-center space-y-5 bg-[#F5F5F5] py-20">
        <p className="text-2xl font-semibold">회원가입</p>
        <div className="flex flex-row">
          {stepItem.map((step) => (
            <div key={step.index} className="flex flex-row items-center">
              <div className="flex flex-col items-center space-y-2">
                <div
                  className={`rounded-full border p-5 ${
                    step.index === 1 ? 'border-[#005BAC] shadow-icon' : 'border-[#757575]'
                  } `}
                >
                  <img src={step.icon} />
                </div>
                <p
                  className={`text-xs ${
                    step.index === 1 ? 'font-semibold text-[#005BAC]' : 'font-normal text-[#757575]'
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

      <div className="flex min-w-[600px] flex-col items-center">
        <div className="mb-20 flex flex-col space-y-9">
          <div className="flex flex-row space-x-4">
            <img src={AgreementIcon} />
            <p className="text-xl font-semibold">약관 동의</p>
          </div>
          <div className="flex flex-col space-y-4">
            <textarea
              className="min-h-[400px] min-w-[600px] resize-none rounded-[5px] border border-[#757575]"
              readOnly
            />
            <div className="flex flex-row space-x-2">
              <input type="checkbox" id="agree" />
              <label htmlFor="agree">개인정보 수집 및 정보이용에 동의합니다.</label>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-9">
          <div className="flex flex-row space-x-4">
            <img src={EmailIcon} />
            <p className="text-xl font-semibold">메일 인증</p>
          </div>
          <div className="flex flex-col space-y-1">
            <p className="flex flex-row text-sm font-semibold">
              이메일 주소<p className="ml-0.5 text-[#d32f2f]">*</p>
            </p>
            <div className="flex flex-col space-y-4">
              <div className="flex flex-row space-x-2">
                <input
                  className="min-w-[432px] rounded-[5px] border border-[#757575] p-4"
                  type="text"
                  placeholder="학교 메일(@inha.edu)을 입력하세요."
                />
                <button className="min-w-40 rounded-[5px] bg-[#005BAC] p-4 text-base font-semibold text-white">
                  인증메일 받기
                </button>
              </div>
              <div className="flex flex-row space-x-2">
                <input
                  className="rounded-[5px] border border-[#757575] p-4"
                  type="text"
                  placeholder="인증번호 6자리"
                />
                <button
                  onClick={() => navigate(`/infoinput`)}
                  className="min-w-40 rounded-[5px] border border-[#005BAC] bg-white p-4 text-base font-semibold text-[#005BAC]"
                >
                  인증번호 입력
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
