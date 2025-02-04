export interface SearchCourseResponse {
  result: {
    courseId: number;
    name: string;
    credit: number;
    code: string;
    category: string;
  };
}

export interface SearchCourseListResponse {
  result: {
    detailInfoList: {
      courseId: number;
      name: string;
      credit: number;
      code: string;
      category: string;
    }[];
  };
}

export interface SearchCourseByListsResponse {
  result: {
    detailInfoList: {
      courseId: number;
      name: string;
      credit: number;
      code: string;
      category: string;
    }[];
  };
}
