export const translateCore = (area: string) => {
  switch (area) {
    case '핵심교양1':
      return '인간, 가치, 공존';

    case '핵심교양2':
      return '역사, 사상, 문화';

    case '핵심교양3':
      return '문학, 예술, 상징';

    case '핵심교양4':
      return '사회, 제도, 세계';

    case '핵심교양5':
      return '자연, 생명, 환경';

    case '핵심교양6':
      return '수리, 정보, 기술';
  }
};
