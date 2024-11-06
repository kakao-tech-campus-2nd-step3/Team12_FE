import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from '@pages/MainPage';
import AttendDate from '@pages/AttendDate';

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
      <AttendDate />
    ),
  },
]);

function BrowserRouterProvider() {
  return (
    <RouterProvider router={router} />
  );
}

export default BrowserRouterProvider;
