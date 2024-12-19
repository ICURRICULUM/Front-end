interface Take {
  code: string;
  name: string;
  category: string;
  majorType: string;
  grade: number;
  credit: number;
}

export interface UpdateTakeListsRequest {
  takeList: Take[];
}

export interface DeleteTakeRequest {
  takeId: number;
}

export interface CreateTakeListsRequest {
  takeList: Take[];
}
