import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import {WorkExperiencePage} from './pages/WorkExperience.page'
import {ProjectsPage} from './pages/Projects.page'
import { CoursesPage } from './pages/Courses.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/work', 
    element: <WorkExperiencePage />
  },
  {
    path: '/projects',
    element: <ProjectsPage />
  }, 
  {
    path: '/courses',
    element: <CoursesPage />
  }, 

]);

export function Router() {
  return <RouterProvider router={router} />;
}
