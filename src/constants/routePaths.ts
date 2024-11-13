const routePaths = {
  MAIN: '/',
  ATTEND: '/attend',
  LOGIN_SUCCESS: '/auth/kakao',
  SUBMIT_PERSONAL_INFO: '/auth',
  STUDY_INFO: (studyId: string | number) => `/study/${studyId}`,
};

export default routePaths;
