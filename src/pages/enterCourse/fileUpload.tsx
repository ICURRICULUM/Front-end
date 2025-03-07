import { useState } from 'react';
import pdfToText from 'react-pdftotext';
import { CreateCourseItem } from '@type/types';
import { GlobalWorkerOptions } from 'pdfjs-dist';
import pdfWorker from 'pdfjs-dist/build/pdf.worker.min?url';
import { useSearchCourseByLists } from '@hooks/course/hook';
import { useGetTakeLists, useCreateTakeLists } from '@hooks/take/hook';

import LoadingComponent from '@components/common/loading';
import FileCourseListComponent from '@components/enterCourse/fileCourseList';

import { useTakeListCodeStore } from '@zustand/take/store';

import RightArrow from '@assets/enterCourse/rightArrow.svg';

GlobalWorkerOptions.workerSrc = pdfWorker;

const FileUploadPage = () => {
  const { codes } = useTakeListCodeStore();

  const stepItem = [
    { index: 1, title: `인하대학교 포털시스템` },
    { index: 2, title: '학사행정' },
    { index: 3, title: '성적' },
    { index: 4, title: '취득학점 현황조회' },
    { index: 5, title: '전체성적표 PDF 저장' },
  ];

  const { refetch: refetchTakeLists } = useGetTakeLists(0, 15);

  // Course List 생성 mutation
  const { mutateAsync: createCourse } = useCreateTakeLists(refetchTakeLists);

  const { mutateAsync: fileUpload, isPending } = useSearchCourseByLists();

  const [isFileUploadComplete, setIsFileUploadComplete] = useState<boolean>(false);

  // 파일 업로드 이후 얻은 데이터
  const [courses, setCourses] = useState<CreateCourseItem[]>([]);

  //   const [courses, setCourses] = useState<
  //     Omit<SearchCourseByListsResponse['result']['detailInfoList'][0], 'courseId'> &
  //       { grade: undefined }[]
  //   >([]);

  const removeFileUploadCourse = (index: number) => {
    setCourses((prevCourses) => {
      if (index < 0 || index >= prevCourses.length) return prevCourses; // 유효성 검사
      return [...prevCourses.slice(0, index), ...prevCourses.slice(index + 1)];
    });
  };

  const handleFileUploadCreate = async () => {
    if (courses.every((item) => item.grade !== undefined)) {
      await createCourse({ takeCreateDTOList: courses });

      setCourses([]);
      setIsFileUploadComplete(false);
    }
  };

  const extractText = async (event: any) => {
    try {
      const file = event.target.files[0];
      const text = await pdfToText(file);

      console.log(text);

      // 성적까지
      const pattern = /(\b[A-F][+-]?0?|P)\s+(전필|전선|교필|교선|교선 외)\s+([A-Z]+[0-9]+)/g;

      let matching;
      const result: { code: string; grade: string }[] = [];
      const codeList: string[] = [];

      console.log(result);
      console.log(codeList);

      while ((matching = pattern.exec(text)) !== null) {
        result.push({ code: matching[3], grade: matching[1] });
        codeList.push(matching[3]);
      }

      // 코드만
      //   const regex = /\b[A-Z]{3}\d{4}\b/g;
      //   const matches = text.match(regex) || [];

      const filteredMatches = codeList.filter((code) => !codes.includes(code));

      // 파일 업로드를 통해 얻은 codes로 얻은 배열
      const response = await fileUpload(filteredMatches);

      const updatedCourses: CreateCourseItem[] = response.result.detailInfoList.map(
        ({ name, credit, code, category }) => ({
          name,
          credit,
          code,
          category,
          majorType: '주전공',
          grade: undefined,
        }),
      );

      const gradeOptions = [
        { label: 'A+', value: 4.5 },
        { label: 'A0', value: 4.0 },
        { label: 'B+', value: 3.5 },
        { label: 'B0', value: 3.0 },
        { label: 'C+', value: 2.5 },
        { label: 'C0', value: 2.0 },
        { label: 'D+', value: 1.5 },
        { label: 'D0', value: 1.0 },
        { label: 'F', value: 0.0 },
        { label: 'P', value: -1.0 },
      ];

      const updatedCoursesWithGrades = updatedCourses.map((course) => {
        const matchedResult = result.find((r) => r.code === course.code);
        if (matchedResult) {
          const gradeOption = gradeOptions.find((option) => option.label === matchedResult.grade);
          return {
            ...course,
            grade: gradeOption ? gradeOption.value : undefined,
          };
        }
        return course;
      });

      setCourses(updatedCoursesWithGrades);
      setIsFileUploadComplete(true);
    } catch (error) {
      console.error(error, 'Failed to extract text from pdf');
    }
  };

  return (
    <section>
      {isPending && <LoadingComponent />}

      <section className="space-y-20">
        <section className="flex flex-col items-center space-y-10 bg-[#F5F5F5] py-10">
          <h2 className="text-xl font-semibold">성적표 불러오기</h2>

          <ol className="flex flex-row space-x-5" aria-label="성적표 불러오기 단계">
            {stepItem.map((step) => (
              <li key={step.index} className="flex flex-row items-center">
                <div className="flex flex-col items-center">
                  <strong>Step {step.index}</strong>
                  <p>{step.title}</p>
                </div>

                {step.index < stepItem.length && (
                  <img src={RightArrow} alt="Arrow Icon" className="px-5" />
                )}
              </li>
            ))}
          </ol>

          <label
            htmlFor="upload"
            className="cursor-pointer rounded-five bg-[#005BAC] p-4 font-semibold text-white"
          >
            파일 업로드하기
          </label>
          <input
            id="upload"
            name="upload"
            type="file"
            accept="application/pdf"
            className="hidden"
            onChange={extractText}
          />
        </section>

        {isFileUploadComplete && (
          <FileCourseListComponent
            courseList={courses}
            setCourses={setCourses}
            removeCourse={removeFileUploadCourse}
            createCourse={handleFileUploadCreate}
          />
        )}
      </section>
    </section>
  );
};

export default FileUploadPage;
