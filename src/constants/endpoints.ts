const prefix = '/api';

const endpoints = {
  myInfo: `${prefix}/users`,
  reIssue: `${prefix}/reissue`,
  searchStudy: `${prefix}/studies`,
  studyInfo: (studyId: number | string) => `${prefix}/studies/${studyId}`,
  studyMembers: (studyId: number | string) => `${prefix}/studies/${studyId}/members`,
  submitPersonalInfo: `${prefix}/auth`,
};

export default endpoints;
