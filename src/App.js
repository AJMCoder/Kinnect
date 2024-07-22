import Login from './pages/login/Login';
import Registration from './pages/registration/Registration';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import NavBar from './components/navbar/NavBar';
import LeftPanel from './components/leftpanel/LeftPanel';
import RightPanel from './components/rightpanel/RightPanel';
//import Home from './pages/home/Home';
//import Profile from './pages/profile/Profile';

function App() {

  const Layout = ()=>{
    return(
      <div>
        <NavBar/>
        <div style={{display:"flex"}}>
          <LeftPanel />
          <Outlet />
          <RightPanel />
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path: "/",
          element: <div>Home</div>
        },
        {
          path: "/profile/:id",
          element: <div>Profile</div>
        },
      ]
    },
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
};

export default App;