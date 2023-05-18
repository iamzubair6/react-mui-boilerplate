import {
  createBrowserRouter,
  Navigate,
  // Outlet,
  RouterProvider,
} from 'react-router-dom';
import Home from './Pages/Home';
import MainLayout from './Layouts/MainLayout';

const App = () => {
  // const { currentUser, userLoading } = useGlobalContext();

  // define routes
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '',
          element: <Home />,
        },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/" />,
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default App;
