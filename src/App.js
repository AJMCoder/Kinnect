import Login from './pages/login/Login';
import Registration from './pages/registration/Registration';
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import NavBar from './components/navbar/NavBar';
import LeftPanel from './components/leftpanel/LeftPanel';
import RightPanel from './components/rightpanel/RightPanel';
import Home from './pages/home/Home';
//import Profile from './pages/profile/Profile';
// import { useContext } from 'react';
// import { AuthContext } from './context/AuthContext';
import './App.css';

function App() {

  const currentUser = true;

  const Layout = ()=>{
    return(
      <div className='theme'>
        <NavBar/>
        <div style={{display:"flex"}}>
          <LeftPanel />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <RightPanel />
        </div>
      </div>
    );
  };

  const ProtectedRoute = ({children})=>{
    if(!currentUser){
      return <Navigate to ="/Login"/>
    }

    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute><Layout/></ProtectedRoute>,
      children:[
        {
          path: "/",
          element: <Home />,
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