interface Take {
  takeId: number;
  code: string;
  name: string;
  category: string;
  majorType: string;
  grade: number;
  credit: number;
}

export interface UpdateTakeListsRequest {
  takeId: number;
  code: string;
  name: string;
  category: string;
  majorType: string;
  credit: number;
  grade: number;
}

export interface DeleteTakeRequest {
  takeId: number;
}

export interface CreateTakeListsRequest {
  takeCreateDTOList: Omit<Take, 'takeId'>[];
}
