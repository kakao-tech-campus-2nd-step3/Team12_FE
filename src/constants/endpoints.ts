const prefix = '/api';

const endpoints = {
  myInfo: `${prefix}/users`,
  reIssue: `${prefix}/reissue`,
  searchStudy: `${prefix}/studies`,
  studyInfo: (studyId: number | string) => `${prefix}/studies/${studyId}`,
  studyMembers: (studyId: number | string) => `${prefix}/studies/${studyId}/members`,
  submitPersonalInfo: `${prefix}/auth`,
  createStudy: `${prefix}/studies`,
  inviteToStudy: (studyId: number) => `${prefix}/studies/${studyId}/members/invites`,
  notices: `${prefix}/notices`,
  assignments: `${prefix}/assignments`,
  attendanceDate: `${prefix}/attendance/date`,
  attendance: `${prefix}/attendance`,
  getCode: `${prefix}/attendance/code`,
};

export default endpoints;
