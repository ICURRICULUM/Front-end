import {
  useMutation,
  useSuspenseQuery,
  UseMutationResult,
  UseSuspenseQueryResult,
} from '@tanstack/react-query';

import { getTakeLists, createTakeLists, updateTakeLists, deleteTakeLists } from '@server/take/api';
import {
  DeleteTakeRequest,
  CreateTakeListsRequest,
  UpdateTakeListsRequest,
} from '@server/take/request';
import {
  DeleteTakeResponse,
  GetTakeListsResponse,
  CreateTakeListsResponse,
  UpdateTakeListsResponse,
} from '@server/take/response';

export const useGetTakeLists = (
  page: number,
  size: number,
): UseSuspenseQueryResult<GetTakeListsResponse> => {
  return useSuspenseQuery({
    queryKey: [`/take/`, page, size],
    queryFn: () => getTakeLists(page, size),
  });
};

export const useUpdateTakeList = (
  refetch: () => void,
): UseMutationResult<UpdateTakeListsResponse, unknown, UpdateTakeListsRequest> => {
  return useMutation({
    mutationFn: (data: UpdateTakeListsRequest) => updateTakeLists(data),
    onSuccess: () => refetch(),
  });
};

export const useDeleteTakeList = (
  refetch: () => void,
): UseMutationResult<DeleteTakeResponse, unknown, DeleteTakeRequest> => {
  return useMutation({
    mutationFn: (data: DeleteTakeRequest) => deleteTakeLists(data),
    onSuccess: () => refetch(),
  });
};

export const useCreateTakeLists = (
  refetch: () => void,
): UseMutationResult<CreateTakeListsResponse, unknown, CreateTakeListsRequest> => {
  return useMutation({
    mutationFn: (data: CreateTakeListsRequest) => createTakeLists(data),
    onSuccess: () => refetch(),
  });
};
