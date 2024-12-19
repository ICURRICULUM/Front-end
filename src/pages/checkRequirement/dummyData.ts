export const myInfoDummyData = {
  major: '소비자학',
  doubleMajor: '경영학과(복수전공)',
  totalCredit: 130,
  currentCredit: 127,
  majorTotalCredit: 39,
  currentMajorCredit: 48,
  doubleMajorTotalCredit: 21,
  currentDoubleMajorCredit: 21,
};

export const checkDummyData = [
  { checkListId: 1, title: '영어졸업인증', isDone: false },
  { checkListId: 2, title: '졸업 논문 제출', isDone: false },
  { checkListId: 3, title: '평균 평점 3.3 이상', isDone: false },
];

export const majorDummyData = [
  { name: '전체', current: 103, total: 130 },
  { name: '전공전체', current: 45, total: 65 },
  { name: '전공필수', current: 17, total: 20 },
  { name: '교양필수', current: 15, total: 25 },
  { name: '핵심교양', current: 6, total: 9 },
  { name: 'SW/AI', current: 3, total: 3 },
  { name: '창의', current: 0, total: 0 },
];

export const smallDummyData = [
  { id: 'majorRequired', title: '전공필수 이수학점', value: { current: 17, total: 20 } },
  { id: 'generalRequired', title: '교양필수 이수학점', value: { current: 15, total: 25 } },
  { id: 'core', title: '핵심교양 이수학점', value: { current: 6, total: 9 } },
  { id: 'swAi', title: 'SW/AI 이수학점', value: { current: 3, total: 3 } },
  { id: 'creativity', title: '창의 이수학점', value: { current: 0, total: 0 } },
];

export const doubleMajorStatus = [
  { name: '전체', current: 34, total: 55 },
  { name: '복수전공 필수', current: 9, total: 12 },
];

export const minorStatus = [
  { name: '전체', current: 32, total: 35 },
  { name: '부전공 필수', current: 9, total: 12 },
];

export const relatedMajorStatus = [
  { name: '전체', current: 32, total: 35 },
  { name: '연계전공 필수', current: 9, total: 12 },
];

export const convergenceMajorStatus = [
  { name: '전체', current: 32, total: 35 },
  { name: '융합전공 필수', current: 9, total: 12 },
];
