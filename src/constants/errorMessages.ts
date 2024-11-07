import { HttpStatusCode } from 'axios';

export type ErrorMessages = {
  [key: number]: string;
};

export const fetchErrorMessages: ErrorMessages = {
  [HttpStatusCode.BadRequest]: '잘못된 요청입니다.',
  [HttpStatusCode.NotFound]: '서버에서 데이터를 찾을 수 없습니다.',
};

export const defaultFetchErrorMessage = '요청 처리 중 오류가 발생했습니다.';

export const defaultErrorMessage = '오류가 발생했습니다.';
