import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Test from '@/pages/test';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>Hello World</div>
    ),
  },
  {
    path: '/test',
    element: (
      <Test />
    ),
  },
]);

function BrowserRouterProvider() {
  return (
    <RouterProvider router={router} />
  );
}

export default BrowserRouterProvider;
