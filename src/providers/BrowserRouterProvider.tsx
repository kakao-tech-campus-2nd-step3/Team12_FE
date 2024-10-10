import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import StudyCreation from '@/features/studyCreation/StudyCreation';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <div>Hello World</div>
        <StudyCreation open onClose={() => {}} />
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
