import MailIcon from '@assets/signUp/mailIcon.svg';
import EditIcon from '@assets/signUp/editIcon.svg';
import LaughIcon from '@assets/signUp/laughIcon.svg';
import RightArrow from '@assets/signUp/rightArrow.svg';

const CompletePage = () => {
  const stepItem = [
    { index: 1, title: '약관 및 메일 인증', icon: MailIcon },
    { index: 2, title: '필수정보 입력', icon: EditIcon },
    { index: 3, title: '회원가입 완료', icon: LaughIcon },
  ];

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
                    step.index === 3 ? 'border-[#005BAC] shadow-icon' : 'border-[#757575]'
                  } `}
                >
                  <img src={step.icon} />
                </div>
                <p
                  className={`text-xs ${
                    step.index === 3 ? 'font-semibold text-[#005BAC]' : 'font-normal text-[#757575]'
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

      <div className="space-y-10">
        <p className="text-center text-xl font-semibold">
          내 수강 이력을 입력하고
          <br />
          졸업 요건 달성 여부를 확인하세요!
        </p>

        <div className="flex flex-col space-y-2">
          <button className="rounded-[5px] bg-[#005BAC] p-4 text-base font-semibold text-white">
            수강 이력 입력하기
          </button>
          <button className="rounded-[5px] border border-[#005BAC] bg-white p-4 text-base font-semibold text-[#005BAC]">
            내 정보 수정하기
          </button>
        </div>
      </div>
    </main>
  );
};

export default CompletePage;
