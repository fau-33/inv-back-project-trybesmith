export type ServiceResponseType =
'SUCCESSFUL' | 'CREATED' | 'UNAUTHORIZED' | 'NOT_FOUND' | 'INVALID_DATA';

export type ServiceResponse<T> = {
  status: ServiceResponseType,
  data: T | { message: string },
};