import { createBrowserRouter } from 'react-router';
import Navbar from '../Components/Navbar';
import RootLayout from '../Layouts/RootLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout></RootLayout>,
  },
]);
