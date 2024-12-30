export const translateGrade = (grade: number) => {
  switch (grade) {
    case 4.5:
      return 'A+';

    case 4.0:
    case 4:
      return 'A0';

    case 3.5:
      return 'B+';

    case 3.0:
    case 3:
      return 'B0';

    case 2.5:
      return 'C+';

    case 2.0:
    case 2:
      return 'C0';

    case 1.5:
      return 'D+';

    case 1.0:
    case 1:
      return 'D0';
  }
};
