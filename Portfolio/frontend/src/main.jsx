import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/fr";

import themeMui from "./theme/muiTheme";

import ErrorPage from "./pages/ErrorPage";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Admin from "./pages/Admin";

// add contexts

import "./style/main.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home/",
        element: <Home />,
      },
      {
        path: "admin/",
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
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fr">
          <RouterProvider router={router} />
        </LocalizationProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);
