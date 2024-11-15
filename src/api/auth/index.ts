import axios from 'axios';
import endpoints from '@constants/endpoints';
import { TokenReIssueResponse } from '@/types/auth';

export async function reIssueAccessToken() {
  const response = await axios.get<TokenReIssueResponse>(endpoints.reIssue);
  return response;
}
