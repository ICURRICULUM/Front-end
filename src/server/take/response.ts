export interface GetTakeListsResponse {
  result: {
    takeList: {
      takeId: number;
      code: string;
      name: string;
      category: string;
      credit: number;
      majorType: string;
    }[];
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
  };
}
