import MyInfo from '@components/myPage/myInfo';

import { useUserProfileStore } from '@zustand/user/store';

const MyPage = () => {
  const { userProfile } = useUserProfileStore();

  return (
    <main className="mx-auto w-[1000px]">
      <section className="flex flex-col space-y-10 pt-20">
        <header className="mt-20 text-center">
          <p className="text-3xl font-bold">마이페이지</p>
        </header>

        <section className="flex flex-col space-y-2.5">
          <MyInfo myInfoData={userProfile} />
        </section>
      </section>
    </main>
  );
};

export default MyPage;
