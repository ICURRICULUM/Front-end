import { DeleteTakeRequest, CreateTakeListsRequest, UpdateTakeListsRequest } from './request';
import {
  DeleteTakeResponse,
  GetTakeListsResponse,
  CreateTakeListsResponse,
  UpdateTakeListsResponse,
} from './response';

import { GetAxiosInstance, PostAxiosInstance } from '@axios/axios.method';

export const getTakeLists = async (): Promise<GetTakeListsResponse> => {
  const response = await GetAxiosInstance<GetTakeListsResponse>(`/take/`);

  return response.data;
};

export const updateTakeLists = async (
  data: UpdateTakeListsRequest,
): Promise<UpdateTakeListsResponse> => {
  const response = await PostAxiosInstance<UpdateTakeListsResponse>(`/take/update`, data);

  return response.data;
};

export const deleteTakeLists = async (data: DeleteTakeRequest): Promise<DeleteTakeResponse> => {
  const response = await PostAxiosInstance<DeleteTakeResponse>(`/take/delete`, data);

  return response.data;
};

export const createTakeLists = async (
  data: CreateTakeListsRequest,
): Promise<CreateTakeListsResponse> => {
  const response = await PostAxiosInstance<CreateTakeListsResponse>(`/take/create`, data);

  return response.data;
};
