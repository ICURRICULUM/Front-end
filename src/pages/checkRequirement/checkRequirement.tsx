import { useState } from 'react';
import { useCheckGraduation } from '@hooks/check-graduation/hook';

import { smallDummyData, myInfoDummyData } from './dummyData';

import Info from '@components/checkRequirement/info';
import NavBar from '@components/checkRequirement/navBar';
import CheckModal from '@components/checkRequirement/checkModal';
import LargeStatus from '@components/checkRequirement/largeStatus';
import SmallStatus from '@components/checkRequirement/smallStatus';

import FolderIcon from '@assets/enterCourse/folder.svg';

const CheckRequirement = () => {
  const [type, setType] = useState<string>('major');

  const { data: CheckGradutaionData } = useCheckGraduation();

  console.log(CheckGradutaionData);

  const [isCheckModalOpen, setIsCheckModalOpen] = useState<boolean>(false);

  const [openStates, setOpenStates] = useState<Record<string, boolean>>({
    majorRequired: false,
    liberalEssential: false,
    core: false,
    swAI: false,
    creativity: false,
  });

  const handleToggle = (id: string) => {
    setOpenStates((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <main className="mx-auto pb-20">
      <header className="flex flex-col items-center space-y-10 bg-[#F5F5F5] pb-10 pt-40 text-center">
        <p className="text-2xl font-semibold">내 졸업요건 확인하기</p>

        <div className="flex w-[500px] flex-row">
          <Info infoData={myInfoDummyData} />
          {/* <CheckList checkListData={checkListData} /> */}
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
            <LargeStatus title="졸업이수학점" value={CheckGradutaionData} />

            <div className="grid w-full grid-cols-3 gap-4">
              {smallDummyData.map(({ id, title, value }) => (
                <SmallStatus
                  key={id}
                  title={title}
                  value={value}
                  isOpened={openStates[id] || false}
                  handleOpen={() => handleToggle(id)}
                  openModal={() => setIsCheckModalOpen(true)}
                />
              ))}
            </div>
          </div>
        )}

        {/* {type === 'doubleMajor' && (
          <div className="space-y-5">
            <LargeStatus title="복수전공 이수학점" value={doubleMajorStatus} />
            <LargeStatus title="부전공 이수학점" value={minorStatus} />
            <LargeStatus title="연계전공 이수학점" value={relatedMajorStatus} />
            <LargeStatus title="융합전공 이수학점" value={convergenceMajorStatus} />
          </div>
        )} */}
      </section>

      <CheckModal
        isVisible={isCheckModalOpen}
        closeModal={() => setIsCheckModalOpen(false)}
        title={'123'}
      />
    </main>
  );
};

export default CheckRequirement;
