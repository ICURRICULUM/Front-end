export interface GetTakeListsResponse {
  result: {
    takeList: {
      takeId: number;
      code: string;
      name: string;
      category: string;
      credit: number;
      majorType: string;
      grade: number;
    }[];
    totalPage: number;
  };
}

export interface UpdateTakeListsResponse {
  result: {
    takeList: {
      takeId: number;
      code: string;
      name: string;
      category: string;
      credit: number;
      majorType: string;
    }[];
    totalPage: number;
  };
}

export interface DeleteTakeResponse {
  result: {
    takeList: {
      takeId: number;
      code: string;
      name: string;
      category: string;
      credit: number;
      majorType: string;
    }[];
    totalPage: number;
  };
}

export interface CreateTakeListsResponse {
  result: {
    takeList: {
      takeId: number;
      code: string;
      name: string;
      category: string;
      credit: number;
      majorType: string;
    }[];
    totalPage: number;
  };
}
