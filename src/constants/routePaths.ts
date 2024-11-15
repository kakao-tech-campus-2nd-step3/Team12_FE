const routePaths = {
  MAIN: '/',
  ATTEND: '/attend',
  MY_STUDY: '/mystudy',
  LOGIN_SUCCESS: '/auth/kakao',
  SUBMIT_PERSONAL_INFO: '/auth',
  STUDY_INFO: (studyId: string | number) => `/study/${studyId}`,
  STUDY_ATTENDANCE: (studyId: string | number) => `/study/${studyId}/attendance`,
  STUDY_NOTICE: (studyId: string | number) => `/study/notices/${studyId}`,
  STUDY_NOTICE_WRITE: (studyId: string | number) => `/study/notices/write/${studyId}`,
  STUDY_NOTICE_EDIT: (noticeId: string | number) => `/study/notices/edit/${noticeId}`,
  STUDY_NOTICE_DETAIL: (noticeId: string | number) => `/study/notices/detail/${noticeId}`,
  STUDY_ATTENDANCE_DATE: '/study/attendance/date',
};

export default routePaths;
