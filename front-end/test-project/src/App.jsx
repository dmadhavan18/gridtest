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
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
