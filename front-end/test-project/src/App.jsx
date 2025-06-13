import "./app.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import LandingPage from "./components/Landing";
import Main from "./components/Main";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProjectList from "./components/ProjectList";
import NewProject from "./components/NewProject";
import ProjectDetail from "./components/ProjectDetail";
import ProjectEdit from "./components/ProjectEdit";
import Reports from "./components/Reports";

let router = createBrowserRouter([
  {
    path: "",
    Component: Main,
    children: [
      {
        path: "/project",
        children: [
          {
            path: "/project",
            element: <ProjectList />,
          },
          {
            path: "/project/new",
            element: <NewProject />,
          },
          {
            path: "/project/detail",
            element: <ProjectDetail />,
          },
          {
            path: "/project/edit",
            element: <ProjectEdit />,
          },
          {
            path: "/project/reports",
            element: <Reports />, 
          }
        ],
      },
    ],
  },
  {
    path: "/signup",
    Component: Signup
  },
   {
    path: "/login",
    Component: Login
  }
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
