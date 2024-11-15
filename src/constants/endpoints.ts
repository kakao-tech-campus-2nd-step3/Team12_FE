const prefix = '/api';

const endpoints = {
  myInfo: `${prefix}/users`,
  reIssue: `${prefix}/reissue`,
  searchStudy: `${prefix}/studies`,
  studyInfo: (studyId: number | string) => `${prefix}/studies/${studyId}`,
  editStudyProfile: (studyId: number | string) => `${prefix}/studies/${studyId}/profileImage`,
  studyMembers: (studyId: number | string) => `${prefix}/studies/${studyId}/members`,
  studyRole: (studyId: number | string) => `${prefix}/studies/${studyId}/members/role`,
  applyStudyJoin: (studyId: number | string) => `${prefix}/studies/${studyId}/members/apply`,
  submitPersonalInfo: `${prefix}/auth`,
  createStudy: `${prefix}/studies`,
  inviteToStudy: (studyId: number) => `${prefix}/studies/${studyId}/members/invites`,
  notices: `${prefix}/notices`,
  assignments: `${prefix}/assignments`,
  attendanceDate: `${prefix}/attendance/date`,
  attendance: `${prefix}/attendance`,
  getCode: `${prefix}/attendance/code`,
  checkAttendance: `${prefix}/attendance`,
  rankings: `${prefix}/rankings`,
};

export default endpoints;
