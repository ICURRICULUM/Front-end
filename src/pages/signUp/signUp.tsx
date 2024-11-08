import EmailIcon from '@assets/signUp/email.svg';
import AgreementIcon from '@assets/signUp/agreement.svg';

const SignUpPage = () => {
  const stepItem = [
    { index: 1, title: '약관 및 메일 인증' },
    { index: 2, title: '필수정보 입력' },
    { index: 3, title: '회원가입 완료' },
  ];

  return (
    <div className="mb-10 pt-20">
      <div className="mb-14 flex flex-col items-center space-y-10 bg-[#F5F5F5] py-10">
        <p className="">회원가입</p>
        <div className="flex flex-row">
          {stepItem.map((step) => (
            <div key={step.index} className="flex flex-col items-center">
              <p>{step.title}</p>
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
                <button className="min-w-40 rounded-[5px] border border-[#005BAC] bg-white p-4 text-base font-semibold text-[#005BAC]">
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
