import { useState } from 'react';

import CheckList from '@components/myPage/checkList';
import Info from '@components/checkRequirement/info';
import NavBar from '@components/checkRequirement/navBar';
import LargeStatus from '@components/checkRequirement/largeStatus';
import SmallStatus from '@components/checkRequirement/smallStatus';

import FolderIcon from '@assets/enterCourse/folder.svg';

const CheckRequirement = () => {
  const [type, setType] = useState<string>('major');

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
    { checkListId: 1, title: '영어졸업인증', isDone: false },
    { checkListId: 2, title: '졸업 논문 제출', isDone: false },
    { checkListId: 3, title: '평균 평점 3.3 이상', isDone: false },
  ];

  const [status, setStatus] = useState([
    { name: '전체', current: 103, total: 130 },
    { name: '전공전체', current: 45, total: 65 },
    { name: '전공필수', current: 17, total: 20 },
    { name: '교양필수', current: 15, total: 25 },
    { name: '핵심교양', current: 6, total: 9 },
    { name: 'SW/AI', current: 3, total: 3 },
    { name: '창의', current: 0, total: 0 },
  ]);

  const [majorEssential, setMajorEssential] = useState({ current: 17, total: 20 });
  const [liberalEssential, setLiberalEssential] = useState({ current: 15, total: 25 });
  const [coreLiberal, setCoreLiberal] = useState({ current: 6, total: 9 });
  const [swAI, setSWAI] = useState({ current: 3, total: 3 });
  const [creativity, setCreativity] = useState({ current: 0, total: 0 });

  const [doubleMajorStatus, setDoubleMajorStatus] = useState([
    { name: '전체', current: 34, total: 55 },
    { name: '복수전공 필수', current: 9, total: 12 },
  ]);

  const [minorStatus, setMinorStatus] = useState([
    { name: '전체', current: 32, total: 35 },
    { name: '부전공 필수', current: 9, total: 12 },
  ]);

  const [relatedMajorStatus, setRelatedMajorStatus] = useState([
    { name: '전체', current: 32, total: 35 },
    { name: '연계전공 필수', current: 9, total: 12 },
  ]);

  const [convergenceMajorStatus, setConvergenceMajorStatus] = useState([
    { name: '전체', current: 32, total: 35 },
    { name: '융합전공 필수', current: 9, total: 12 },
  ]);

  return (
    <main className="mx-auto pb-20">
      <header className="flex flex-col items-center space-y-10 bg-[#F5F5F5] pb-10 pt-40 text-center">
        <h1>내 졸업요건 확인하기</h1>

        <div className="flex flex-row">
          <Info infoData={myInfoData} />
          <CheckList checkListData={checkListData} />
        </div>
      </header>

      <NavBar type={type} setType={setType} />

      <section className="mx-auto mt-16 w-4/5">
        <header className="mb-5 flex items-center space-x-4">
          <img src={FolderIcon} alt="Folder Icon" className="h-6 w-6" />
          <h2 className="text-xl font-semibold">내 이수현황</h2>
        </header>

        {type === 'major' && (
          <div className="space-y-5">
            <LargeStatus title="졸업이수학점" value={status} />

            <div className="grid grid-cols-3 gap-x-4 gap-y-5">
              <SmallStatus title="전공필수 이수학점" value={majorEssential} />
              <SmallStatus title="교양필수 이수학점" value={liberalEssential} />
              <SmallStatus title="핵심교양 이수학점" value={coreLiberal} />
              <SmallStatus title="SW/AI 이수학점" value={swAI} />
              <SmallStatus title="창의 이수학점" value={creativity} />
            </div>
          </div>
        )}

        {type === 'doubleMajor' && (
          <div className="space-y-5">
            <LargeStatus title="복수전공 이수학점" value={doubleMajorStatus} />
            <LargeStatus title="부전공 이수학점" value={minorStatus} />
            <LargeStatus title="연계전공 이수학점" value={relatedMajorStatus} />
            <LargeStatus title="융합전공 이수학점" value={convergenceMajorStatus} />
          </div>
        )}
      </section>
    </main>
  );
};

export default CheckRequirement;
