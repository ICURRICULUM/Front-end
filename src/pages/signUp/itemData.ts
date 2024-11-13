interface NumberItem {
  id: number;
  name: string;
  value: number;
}

interface StringItem {
  id: number;
  name: string;
  value: string;
}

export const admissionYearItem: NumberItem[] = [
  { id: 1, name: '18학번', value: 18 },
  { id: 2, name: '19학번', value: 19 },
  { id: 3, name: '20학번', value: 20 },
  { id: 4, name: '21학번', value: 21 },
  { id: 5, name: '22학번', value: 22 },
  { id: 6, name: '23학번', value: 23 },
  { id: 7, name: '24학번', value: 24 },
];

export const majorItem: StringItem[] = [
  { id: 1, name: '기계공학과 / 기계공학', value: '기계공학과 / 기계공학' },
  { id: 2, name: '항공우주공학과 / 항공우주공학', value: '항공우주공학과 / 항공우주공학' },
  { id: 3, name: '조선해양공학과 / 조선해양공학', value: '조선해양공학과 / 조선해양공학' },
  { id: 4, name: '산업경영공학과 / 산업경영공학', value: '산업경영공학과 / 산업경영공학' },
  { id: 5, name: '화학공학과 / 화학공학', value: '화학공학과 / 화학공학' },
  { id: 6, name: '화학공학과 / 이차전지공학', value: '화학공학과 / 이차전지공학' },
  { id: 7, name: '고분자공학과 / 고분자공학', value: '고분자공학과 / 고분자공학' },
  { id: 8, name: '신소재공학과 / 신소재공학', value: '신소재공학과 / 신소재공학' },
  { id: 9, name: '신소재공학과 / 반도체공학', value: '신소재공학과 / 반도체공학' },
];
