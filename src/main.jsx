import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import { GlobalStyled } from "./GlobalStyled";
import College from "./pages/Colleges/College.jsx";
import Courses from "./pages/Courses/Courses.jsx";
import Party from "./pages/Partys/Party.jsx";
import { ListGroupItem } from "react-bootstrap";
import ListRemoteStudent from "./pages/ListRemoteStudents/ListRemoteStudents.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/college",
    element: <College />,
  },
  {
    path: "/courses",
    element: <Courses />,
  },
  {
    path: "/party",
    element: <Party />,
  },
  {
    path: "/remoteStudents",
    element: <ListRemoteStudent />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyled />
    <RouterProvider router={router} />
  </React.StrictMode>
);
