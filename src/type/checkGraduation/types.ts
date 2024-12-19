// SW/AI
export interface SWAiItem {
  completedCredit: number;
  requiredCredit: number;
  isClear: boolean;
}

// 창의
export interface CreativityItem {
  completedCredit: number;
  requiredCredit: number;
  isClear: boolean;
}

// 핵심 교양
export interface CoreItem {
  completedCredit: number;
  requiredCredit: number;
  uncompletedArea: string[];
  isClear: boolean;
}

// 교양 필수
export interface GeneralRequiredItem {
  completedCredit: number;
  requiredCredit: number;
  uncompletedCourseSet: {
    createAt: string;
    id: number;
    code: string;
    name: string;
    credit: number;
  }[];
  isClear: boolean;
}

// 전공 필수
export interface MajorRequiredItem {
  completedCredit: number;
  requiredCredit: number;
  uncompletedCourseList: {
    createAt: string;
    id: number;
    code: string;
    name: string;
    credit: number;
  }[];
  isClear: boolean;
}

// 전공 선택
export interface MajorSelectItem {
  completedCredit: number;
  requiredCredit: number;
  isClear: boolean;
}
