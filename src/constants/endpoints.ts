const prefix = '/api';

const endpoints = {
  myInfo: `${prefix}/users`,
  reIssue: `${prefix}/reissue`,
};

const authRequiredEndpoints = {
  [endpoints.myInfo]: true,
};

export function isAuthRequired(endpoint?: string) {
  return endpoint && endpoint in authRequiredEndpoints;
}

export default endpoints;
