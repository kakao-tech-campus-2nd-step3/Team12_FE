import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from '@pages/MainPage';
import AttendDatePage from '@/pages/AttendDatePage';

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
]);

function BrowserRouterProvider() {
  return (
    <RouterProvider router={router} />
  );
}

export default BrowserRouterProvider;
