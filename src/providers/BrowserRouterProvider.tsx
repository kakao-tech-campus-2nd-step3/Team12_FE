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
]);

function BrowserRouterProvider() {
  return (
    <RouterProvider router={router} />
  );
}

export default BrowserRouterProvider;
