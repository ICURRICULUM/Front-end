interface NumberItem {
  id: number;
  name: string;
  value: number;
}

interface StringItem {
  id: number;
  value: number;
  name: string;
}

export const joinYearItem: NumberItem[] = [
  { id: 1, name: '18학번', value: 2018 },
  { id: 2, name: '19학번', value: 2019 },
  { id: 3, name: '20학번', value: 2020 },
  { id: 4, name: '21학번', value: 2021 },
  { id: 5, name: '22학번', value: 2022 },
  { id: 6, name: '23학번', value: 2023 },
  { id: 7, name: '24학번', value: 2024 },
];

export const majorItem: StringItem[] = [{ id: 1, value: 1, name: '컴퓨터공학과' }];
