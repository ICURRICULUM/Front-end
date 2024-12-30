import { useGetMemberInfo } from '@hooks/member/hook';

import MyInfo from '@components/myPage/myInfo';

const MyPage = () => {
  const { data: userProfile } = useGetMemberInfo();

  return (
    <main className="mx-auto w-[1000px]">
      <section className="flex flex-col space-y-10 pt-20">
        <header className="mt-20 text-center">
          <p className="text-3xl font-bold">마이페이지</p>
        </header>

        {userProfile !== undefined && (
          <section className="flex flex-col space-y-2.5">
            <MyInfo myInfoData={userProfile.result} />
          </section>
        )}
      </section>
    </main>
  );
};

export default MyPage;
