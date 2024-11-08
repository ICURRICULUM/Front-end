import CheckList from '@components/myPage/checkList';
import Info from '@components/checkRequirement/info';

const CheckRequirement = () => {
  const myInfoData = {
    major: '소비자학',
    doubleMajor: '경영학과(복수전공)',
    totalCredit: 130,
    currentCredit: 127,
    majorTotalCredit: 39,
    currentMajorCredit: 48,
    doubleMajorTotalCredit: 21,
    currentDoubleMajorCredit: 21,
  };

  const checkListData = [
    {
      checkListId: 1,
      title: '영어졸업인증',
      isDone: false,
    },
    {
      checkListId: 2,
      title: '졸업 논문 제출',
      isDone: false,
    },
    {
      checkListId: 3,
      title: '평균 평점 3.3 이상',
      isDone: false,
    },
  ];

  return (
    <main>
      <header className="flex flex-col items-center space-y-10 bg-[#F5F5F5] pb-10 pt-40 text-center">
        <h1>내 졸업요건 확인하기</h1>

        <div className="flex flex-row">
          <Info infoData={myInfoData} />
          <CheckList checkListData={checkListData} />
        </div>
      </header>
    </main>
  );
};

export default CheckRequirement;
