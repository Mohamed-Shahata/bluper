export interface ApiSuccessResponse<TData> {
  readonly success: true;
  readonly data: TData;
  readonly message?: string;
}

export interface ApiErrorDetail {
  readonly code: string;
  readonly message: string;
}

export interface ApiErrorResponse {
  readonly success: false;
  readonly error: ApiErrorDetail;
}

export type ApiResponse<TData> = ApiSuccessResponse<TData> | ApiErrorResponse;

export interface PaginationMeta {
  readonly page: number;
  readonly pageSize: number;
  readonly totalItems: number;
  readonly totalPages: number;
}

export interface PaginatedResponse<TItem> {
  readonly items: readonly TItem[];
  readonly meta: PaginationMeta;
}
