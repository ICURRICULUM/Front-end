export interface SearchCourseResponse {
  result: {
    courseId: number;
    name: string;
    credit: number;
    code: string;
    category: string;
  };
}
