import { useState } from 'react';
import { CreateCourseItem } from '@type/types';
import { useGetTakeLists, useCreateTakeLists } from '@hooks/take/hook';

import LoadingComponent from '@components/common/loading';
import CustomCourse from '@components/enterCourse/customCourse';

const CustomPage = () => {
  const [courseData, setCourseData] = useState<CreateCourseItem>({
    code: 'CUSTOM',
    name: '',
    category: '',
    majorType: '',
    credit: 0,
    grade: undefined,
  });

  const { refetch } = useGetTakeLists(0, 15);
  const { mutateAsync: createCourse, isPending } = useCreateTakeLists(refetch);

  const create = async () => {
    await createCourse({ takeCreateDTOList: [courseData] });
    setCourseData({
      code: 'CUSTOM',
      name: '',
      category: '',
      majorType: '',
      credit: 0,
      grade: undefined,
    });
  };

  return (
    <section>
      {isPending && <LoadingComponent />}

      <section className="mx-auto mt-20 flex w-[1000px] flex-col space-y-20">
        <CustomCourse value={courseData} setValue={setCourseData} createCourse={create} />
      </section>
    </section>
  );
};

export default CustomPage;
