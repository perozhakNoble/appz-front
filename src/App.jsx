import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import ErrorPage from "./components/ErrorPage";
import Index from "./routes/Index";
import Profile from "./routes/Profile";
import Stats from "./routes/Stats";
import Expenses, { loader as expensesLoader } from "./routes/Expenses";
import Graph, { loader as graphLoader } from "./routes/Graph";
import Login from "./routes/Login";
import { AuthProvider } from "./hooks/useAuth";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { USERS } from "./db";
import CommunicateModule from "./routes/CommunicateModule";
import HelpModule from "./routes/HelpModule";
import IndentifyPerson from "./routes/IndentifyPerson";
import InfoModule from "./routes/InfoModule";
import CharityHelp from "./routes/CharityHelp";
import StatsByUser from "./routes/StatsByUser";

const users = JSON.parse(localStorage.getItem("users"));
if (!users || !users.length) localStorage.setItem("users", JSON.stringify(USERS));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Root />
          </ProtectedRoute>
        }
        errorElement={<ErrorPage />}
      >
        <Route errorElement={<ErrorPage />}>
          <Route index element={<Index />} />

          <Route path="profile" element={<Profile />} />
          <Route path="stats" element={<Stats />} />
          <Route path="communicate" element={<CommunicateModule />} />
          <Route path="help" element={<HelpModule />} />
          <Route path="indentify" element={<IndentifyPerson />} />
          <Route path="info" element={<InfoModule />} />
          <Route path="expenses" loader={expensesLoader} element={<Expenses />}>
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
          <Route path="incomings" loader={expensesLoader} element={<Expenses text="Надходження" incomings />}>
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
          <Route element={<CharityHelp />} path="charity" />
          <Route element={<StatsByUser />} path="by-user" />
        </Route>
      </Route>
      <Route path="/login" element={<Login />} />
    </>
  )
);

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
