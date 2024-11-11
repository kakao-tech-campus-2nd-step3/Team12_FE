const prefix = '/api';

const endpoints = {
  myInfo: `${prefix}/users`,
  reIssue: `${prefix}/reissue`,
  searchStudy: `${prefix}/studies`,
  createStudy: `${prefix}/studies`,
  inviteToStudy: (studyId: number) => `${prefix}/studies/${studyId}/members/invites`,
  getStudy: (studyId: number) => `${prefix}/studies/${studyId}`,
};

export default endpoints;
