import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import { GlobalStyled } from "./GlobalStyled";
import College from "./pages/Colleges/College.jsx";
import Courses from "./pages/Courses/Courses.jsx";
import Party from "./pages/Partys/Party.jsx";

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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyled />
    <RouterProvider router={router} />
  </React.StrictMode>
);
