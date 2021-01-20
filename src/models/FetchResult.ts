export enum FetchResultType {
    Error = 'error',
    Success = 'success',
}

export interface SuccessfulFetchResult<T> {
    status: number;
    data: T;
    type: FetchResultType.Success;
}

export interface UnsuccessfulFetchResult<E> {
    status: number;
    error: E;
    type: FetchResultType.Error;
}

export type FetchResult<T, E> = SuccessfulFetchResult<T> | UnsuccessfulFetchResult<E>;

export function isFetchResultSuccesful<T, E>(result: FetchResult<T, E>): result is SuccessfulFetchResult<T> {
    return result.type === FetchResultType.Success;
}
