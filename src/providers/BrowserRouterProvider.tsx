import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from '@pages/MainPage';
import routePaths from '@constants/routePaths';
import LoginSuccessPage from '@pages/LoginSuccessPage';
import StudyInfoPage from '@pages/StudyInfoPage';
import SubmitPersonalInfoPage from '@pages/SubmitPersonalInfoPage';
import NoticePage from '@pages/notice/NoticePage';
import NoticeWritePage from '@pages/notice/NoticeWritePage';
import NoticeDetailPage from '@pages/notice/NoticeDetailPage';
import NoticeEditPage from '@pages/notice/NoticeEditPage';
import AssignPage from '@pages/assignment/AssignPage';
import AssignWritePage from '@pages/assignment/AssignWritePage';
import AssignDetailPage from '@pages/assignment/AssignDetailPage';
import AssignEditPage from '@pages/assignment/AssignEditPage';
import MyStudyPage from '@pages/MyStudyPage';
import AttendDatePage from '@/pages/AttendDatePage';
import JoinStudyPage from '@/pages/JoinStudyPage';

const router = createBrowserRouter([
  {
    path: routePaths.MAIN,
    element: (
      <MainPage />
    ),
  },
  {
    path: routePaths.ATTEND,
    element: (
      <AttendDatePage />
    ),
  },
  {
    path: routePaths.LOGIN_SUCCESS,
    element: (
      <LoginSuccessPage />
    ),
  },
  {
    path: routePaths.SUBMIT_PERSONAL_INFO,
    element: (
      <SubmitPersonalInfoPage />
    ),
  },
  {
    path: routePaths.STUDY_INFO(':studyId'),
    element: (
      <StudyInfoPage />
    ),
  },
  {
    path: '/join',
    element: (
      <JoinStudyPage />
    ),
  },
  {
    path: routePaths.STUDY_ATTENDANCE(':studyId'),
    element: (
      <AttendDatePage />
    ),
  },
  {
    path: routePaths.STUDY_NOTICE(':studyId'),
    element: (
      <NoticePage />
    ),
  },
  {
    path: routePaths.STUDY_NOTICE_WRITE(':studyId'),
    element: (
      <NoticeWritePage />
    ),
  },
  {
    path: routePaths.STUDY_NOTICE_DETAIL(':noticeId'),
    element: (
      <NoticeDetailPage />
    ),
  },
  {
    path: routePaths.STUDY_NOTICE_EDIT(':noticeId'),
    element: (
      <NoticeEditPage />
    ),
  },
  {
    path: routePaths.STUDY_ASSIGNMENT(':studyId'),
    element: (
      <AssignPage />
    ),
  },
  {
    path: routePaths.STUDY_ASSIGNMENT_WRITE(':studyId'),
    element: (
      <AssignWritePage />
    ),
  },
  {
    path: routePaths.STUDY_ASSIGNMENT_DETAIL(':assignId'),
    element: (
      <AssignDetailPage />
    ),
  },
  {
    path: routePaths.STUDY_ASSIGNMENT_EDIT(':assignId'),
    element: (
      <AssignEditPage />
    ),
  },
  {
    path: routePaths.MY_STUDY,
    element: (
      <MyStudyPage />
    ),
  },
]);

function BrowserRouterProvider() {
  return (
    <RouterProvider router={router} />
  );
}

export default BrowserRouterProvider;
