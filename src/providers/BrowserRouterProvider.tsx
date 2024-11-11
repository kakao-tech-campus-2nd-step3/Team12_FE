import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from '@pages/MainPage';
import AttendDatePage from '@/pages/AttendDatePage';
import JoinStudyPage from '@/pages/JoinStudyPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <MainPage />
    ),
  },
  {
    path: '/attend',
    element: (
      <AttendDatePage />
    ),
  },
  {
    path: '/join',
    element: (
      <JoinStudyPage />
    ),
  },
]);

function BrowserRouterProvider() {
  return (
    <RouterProvider router={router} />
  );
}

export default BrowserRouterProvider;
