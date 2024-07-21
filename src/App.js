import Login from './pages/login/Login';
import Registration from './pages/registration/Registration';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path: "/Login",
      element: <Login/>,
    },
    {
      path: "/Registration",
      element: <Registration/>,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;