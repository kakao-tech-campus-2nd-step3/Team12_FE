const endpoints = {
  myInfo: '/api/users',
};

const authRequiredEndpoints = {
  [endpoints.myInfo]: true,
};

export function isAuthRequired(endpoint?: string) {
  return endpoint && endpoint in authRequiredEndpoints;
}

export default endpoints;
