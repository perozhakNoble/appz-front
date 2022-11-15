import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import ErrorPage from "./components/ErrorPage";
import Index from "./routes/Index";
import Profile from "./routes/Profile";
import Stats from "./routes/Stats";
import Expenses from "./routes/Expenses";
import Graph, { loader as graphLoader } from "./routes/Graph";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Index />} />

        <Route path="profile" element={<Profile />} />
        <Route path="stats" element={<Stats />}></Route>
        <Route path="expenses" element={<Expenses />}>
          <Route
            loader={graphLoader}
            index
            element={<Graph />}
            errorElement={
              <div className="w-full h-full">
                <ErrorPage />
              </div>
            }
          />
        </Route>
      </Route>
    </Route>
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
