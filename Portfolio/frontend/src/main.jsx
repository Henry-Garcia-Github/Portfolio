import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StyledEngineProvider, ThemeProvider } from "@mui/material";

import themeMui from "./theme/muiTheme";

import ErrorPage from "./pages/ErrorPage";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import SelectProject from "./pages/SelectProject";
import Projects from "./pages/Projects";

// add contexts

import "./style/main.scss";
import AdminUpdate from "./pages/AdminUpdate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/projects/:id",
        element: <SelectProject />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/admin/:id",
        element: <AdminUpdate />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themeMui}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);
