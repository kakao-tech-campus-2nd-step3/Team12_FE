const routePaths = {
  MAIN: '/',
  ATTEND: '/attend',
  LOGIN_SUCCESS: '/auth/kakao',
  SUBMIT_PERSONAL_INFO: '/auth',
  STUDY_INFO: (studyId: string | number) => `/study/${studyId}`,
  STUDY_ATTENDANCE: (studyId: string | number) => `/study/${studyId}/attendance`,
  STUDY_NOTICE: (studyId: string | number) => `/study/notices/${studyId}`,
  STUDY_NOTICE_WRITE: (studyId: string | number) => `/study/notices/write/${studyId}`,
  STUDY_ATTENDANCE_DATE: '/study/attendance/date',
};

export default routePaths;
