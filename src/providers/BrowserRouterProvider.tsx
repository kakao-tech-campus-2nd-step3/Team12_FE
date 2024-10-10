import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PersonalInfoModal } from '../features/login/PersonalInfoModal';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <div>Hello World</div> 
        <PersonalInfoModal open={true} onClose={() => {}}/>
      </>
    ),
  },
]);

function BrowserRouterProvider() {
  return (
    <RouterProvider router={router} />
  );
}

export default BrowserRouterProvider;
