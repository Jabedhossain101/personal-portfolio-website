import { createBrowserRouter } from 'react-router';
import Navbar from '../Components/Navbar';
import RootLayout from '../Layouts/RootLayout';
import Projects from '../Home/Projects';
import ProjectDetails from '../Home/ProjectDetails';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout></RootLayout>,
  },
  {
    path: '/projects',
    Component: Projects,
  },
  {
    path: '/projects/:id',
    Component: ProjectDetails,
  },
]);
