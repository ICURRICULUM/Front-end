import {
  CoreItem,
  SWAiItem,
  CreativityItem,
  MajorSelectItem,
  MajorRequiredItem,
  GeneralRequiredItem,
} from 'type/checkGraduation/types';

export interface CheckGraduationResponse {
  result: {
    swAiDTO: SWAiItem;
    creativityDTO: CreativityItem;
    coreDTO: CoreItem;
    majorRequiredDTO: MajorRequiredItem;
    majorSelectDTO: MajorSelectItem;
    generalRequiredDTO: GeneralRequiredItem;

    totalCompletedCredit: number;
    totalNeedCredit: number;
    isOverTotalNeedCredit: boolean;
  };
}
