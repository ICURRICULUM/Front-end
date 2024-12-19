import {
  CoreItem,
  SWAiItem,
  CreativityItem,
  MajorSelectItem,
  MajorRequiredItem,
  GeneralRequiredItem,
} from './checkGraduation/types';

export interface CourseItem {
  courseId: string;
  courseName: string;
  area: string;
  status: string;
  credit: number;
  grade: string;
}

export interface Course {
  takeId: number;
  code: string;
  name: string;
  category: string;
  credit: number;
  majorType: string;
}

export interface CheckGraduationItem {
  swAiDTO: SWAiItem;
  creativityDTO: CreativityItem;
  coreDTO: CoreItem;
  majorRequiredDTO: MajorRequiredItem;
  majorSelectDTO: MajorSelectItem;
  generalRequiredDTO: GeneralRequiredItem;

  totalCompletedCredit: number;
  totalNeedCredit: number;
  isOverTotalNeedCredit: boolean;
}
