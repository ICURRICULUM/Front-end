import {
  CoreItem,
  SWAiItem,
  CreativityItem,
  MajorSelectItem,
  MajorRequiredItem,
  GeneralRequiredItem,
} from './checkGraduation/types';

export interface CourseItem {
  courseId: number;
  name: string;
  code: string;
  category: string;
  credit: number;
}

export interface CustomCourseItem {
  name: string;
  category: string;
  credit: number;
  majorType: string;
  grade: number;
}

export interface CreateCourseItem {
  code: string;
  name: string;
  category: string;
  credit: number;
  majorType: string;
  grade: number | undefined;
}

export interface TakeItem {
  takeId: number;
  code: string;
  name: string;
  category: string;
  credit: number;
  majorType: string;
  grade: number;
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
