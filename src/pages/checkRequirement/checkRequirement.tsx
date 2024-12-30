import { useState } from 'react';
import { useCheckGraduation } from '@hooks/graduation/hook';

import Info from '@components/checkRequirement/info';
import NavBar from '@components/checkRequirement/navBar';
import LargeStatus from '@components/checkRequirement/largeStatus';
import SmallStatus from '@components/checkRequirement/smallStatus';

import FolderIcon from '@assets/enterCourse/folder.svg';

const CheckRequirement = () => {
  const [type, setType] = useState<string>('major');

  const { data: checkGradutaionData } = useCheckGraduation();

  const keys = [
    { key: 'majorRequiredDTO', title: '전공 필수' },
    { key: 'generalRequiredDTO', title: '교양 필수' },
    { key: 'coreDTO', title: '핵심 교양' },
    { key: 'swAiDTO', title: 'SW/AI' },
    { key: 'creativityDTO', title: '창의' },
  ];

  const resultData = keys.map((item, index) => ({
    id: index,
    title: item.title,
    value: checkGradutaionData?.result[item.key],
  }));

  const [openStates, setOpenStates] = useState<Record<string, boolean>>({
    majorRequired: false,
    liberalEssential: false,
    core: false,
    swAI: false,
    creativity: false,
  });

  const handleToggle = (id: number) => {
    setOpenStates((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <main className="mx-auto pb-20">
      {checkGradutaionData !== undefined && (
        <>
          <header className="flex flex-col items-center space-y-10 bg-[#F5F5F5] pb-10 pt-40 text-center">
            <p className="text-2xl font-semibold">내 졸업요건 확인하기</p>

            <div className="flex w-[500px] flex-row">
              <Info
                totalNeedCredit={checkGradutaionData?.result.totalNeedCredit}
                totalCompletedCredit={checkGradutaionData?.result.totalCompletedCredit}
                isOverTotalNeedCredit={checkGradutaionData?.result.isOverTotalNeedCredit}
                totalMajorRequiredCredit={
                  checkGradutaionData?.result.majorSelectDTO.totalMajorRequiredCredit
                }
                totalMajorCompletedCredit={
                  checkGradutaionData?.result.majorSelectDTO.totalMajorCompletedCredit
                }
                isMajorSelectClear={checkGradutaionData?.result.majorSelectDTO.isClear}
              />
            </div>
          </header>
          <NavBar type={type} setType={setType} />
          <section className="mx-auto mt-16 w-[960px]">
            <header className="mb-5 flex items-center space-x-4">
              <img src={FolderIcon} alt="Folder Icon" className="h-6 w-6" />
              <h2 className="text-xl font-semibold">내 이수현황</h2>
            </header>

            {type === 'major' && (
              <div className="space-y-5">
                <LargeStatus title="졸업이수학점" value={checkGradutaionData?.result} />

                <div className="grid w-full grid-cols-3 gap-4">
                  {resultData.map(({ id, title, value }) => (
                    <SmallStatus
                      key={id}
                      title={title}
                      value={value}
                      isOpened={openStates[id] || false}
                      handleOpen={() => handleToggle(id)}
                    />
                  ))}
                </div>
              </div>
            )}
          </section>
        </>
      )}
    </main>
  );
};

export default CheckRequirement;
