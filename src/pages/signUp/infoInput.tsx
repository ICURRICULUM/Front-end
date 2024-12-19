import { useState, useEffect } from 'react';
import { useSignUp } from '@hooks/member/hook';

import { majorItem, joinYearItem } from './itemData';

import StepItem from '@components/common/stepComponent';
import MajorSelect from '@components/signUp/majorSelect';
import TextInput from '@components/signUp/infoInput/textInput';
import AdmissionYearSelect from '@components/signUp/admissionYearSelect';

import { useSignUpStore, useUserProfileStore } from '@zustand/user/store';

import PencilIcon from '@assets/signUp/pencil.svg';

const InfoInputPage = () => {
  const { signUpState } = useSignUpStore();
  const { userProfile } = useUserProfileStore();

  const [canNext, setCanNext] = useState<boolean>(false);

  const [name, setName] = useState<string>('');
  const [joinYear, setJoinYear] = useState<number>(0);
  const [departmentId, setDepartmentId] = useState<number>(0);

  const handleName = (name: string) => {
    setName(name);
  };

  const handleJoinYear = (year: number) => {
    setJoinYear(year);
  };

  const handleMajor = (majorId: number) => {
    setDepartmentId(majorId);
  };

  useEffect(() => {
    const isNameValid = name.trim().length > 0;
    const isJoinYearValid = joinYear > 0;
    const isDepartmentIdValid = departmentId > 0;

    setCanNext(isNameValid && isJoinYearValid && isDepartmentIdValid);
  }, [name, joinYear, departmentId]);

  const { mutateAsync: signUp } = useSignUp();

  const handleSignUp = () => {
    signUp({
      email: signUpState.email,
      password: signUpState.password,
      name: name,
      departmentId: departmentId,
      joinYear: joinYear,
    });
  };

  return (
    <main className="mb-10">
      <StepItem currentIndex={2} />

      <section className="mx-auto my-0 flex w-[320px] flex-col space-y-9">
        <header className="flex flex-row space-x-4">
          <img src={PencilIcon} />
          <p className="text-xl font-semibold">필수정보 입력</p>
        </header>

        <div className="flex flex-col space-y-5">
          <TextInput title="이메일 주소" placeholderText={userProfile.email} canEdit={false} />

          <TextInput
            title="이름"
            value={name}
            setValue={handleName}
            placeholderText="이름을 입력하세요."
            canEdit={true}
          />

          <AdmissionYearSelect setValue={handleJoinYear} itemList={joinYearItem} />

          <MajorSelect setValue={handleMajor} itemList={majorItem} />
        </div>

        <button
          onClick={handleSignUp}
          disabled={!canNext}
          className={`w-full rounded-[5px] p-4 text-base font-semibold text-white ${
            canNext ? 'bg-[#005BAC]' : 'bg-[#757575]'
          }`}
        >
          가입하기
        </button>
      </section>
    </main>
  );
};

export default InfoInputPage;
