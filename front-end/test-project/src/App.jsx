import "./app.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import LandingPage from "./pages/Landing";
import Main from "./pages/layout/Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProjectList from "./components/Project/ProjectList";
import NewProject from "./components/Project/NewProject";
import ProjectDetail from "./components/Project/ProjectDetail";
import ProjectEdit from "./components/Project/ProjectEdit";
import Reports from "./components/Reports";
import ProjectTestCaseExplorer from "./components/Screens/ProjectTestCaseExplorer";

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
          },
          {
            path: "/project/testcases",
            element: <ProjectTestCaseExplorer />,
          },
        ],
      },
    ],
  },
  {
    path: "/signup",
    Component: Signup,
  },
  {
    path: "/login",
    Component: Login,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
