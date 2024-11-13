import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from '@pages/MainPage';
import routePaths from '@constants/routePaths';
import LoginSuccessPage from '@pages/LoginSuccessPage';
import StudyInfoPage from '@pages/StudyInfoPage';
import SubmitPersonalInfoPage from '@pages/SubmitPersonalInfoPage';
import AttendDatePage from '@/pages/AttendDatePage';

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
]);

function BrowserRouterProvider() {
  return (
    <RouterProvider router={router} />
  );
}

export default BrowserRouterProvider;
