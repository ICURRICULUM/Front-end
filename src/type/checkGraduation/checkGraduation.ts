export interface SWAItem {
  completedCredit: number;
  requiredCredit: number;
  isClear: boolean;
}

export interface CreativityItem {
  completedCredit: number;
  requiredCredit: number;
  isClear: boolean;
}

export interface CoreItem {
  completedCredit: number;
  requiredCredit: number;
  uncompletedArea: string[];
  isClear: boolean;
}

export interface MajorRequiredItem {
  completedCredit: number;
  requiredCredit: number;
  uncompletedCourseList: {
    createdAt: string;
    id: number;
    code: string;
    name: string;
    credit: number;
  }[];
  isClear: boolean;
}

export interface MajorSelectItem {
  totalMajorCompletedCredit: number;
  totalMajorRequiredCredit: number;
  isClear: boolean;
}

export interface GeneralRequiredItem {
  completedCredit: number;
  requiredCredit: number;
  uncompletedCourseSet: {
    createdAt: string;
    id: number;
    code: string;
    name: string;
    credit: number;
  }[];
  isClear: boolean;
}

export interface TotalCheck {
  swAiDTO: SWAItem;
  creativityDTO: CreativityItem;
  coreDTO: CoreItem;
  majorRequiredDTO: MajorRequiredItem;
  majorSelectDTO: MajorSelectItem;
  generalRequiredDTO: GeneralRequiredItem;
  totalCompletedCredit: number;
  totalNeedCredit: number;
  isOverTotalNeedCredit: boolean;
}
