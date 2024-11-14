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
  getStudy: (studyId: number) => `${prefix}/studies/${studyId}`,
  notices: `${prefix}/notices`,
  assignments: `${prefix}/assignments`,
  attendanceDate: `${prefix}/attendance/date`,
  attendance: `${prefix}/attendance`,
  getStudyMember: (studyId: number) => `${prefix}/studies/${studyId}/members`,
  getCode: `${prefix}/attendance/code`,
};

export default endpoints;
