import StepItem from '@components/common/stepComponent';

const CompletePage = () => {
  return (
    <main className="mb-10">
      <StepItem currentIndex={3} />

      <section className="mx-auto my-0 flex w-[320px] flex-col space-y-10">
        <p className="text-center text-xl font-semibold">
          내 수강 이력을 입력하고
          <br />
          졸업 요건 달성 여부를 확인하세요!
        </p>

        <div className="flex flex-col space-y-2">
          <button className="rounded-[5px] bg-[#005BAC] p-4 text-base font-semibold text-white">
            수강 이력 입력하기
          </button>
          <button className="rounded-[5px] border border-[#646769] bg-white p-4 text-base font-semibold text-[#005BAC]">
            내 정보 수정하기
          </button>
        </div>
      </section>
    </main>
  );
};

export default CompletePage;
