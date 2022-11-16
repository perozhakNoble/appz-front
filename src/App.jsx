import React, { createContext } from "react";
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

const USERS = [
  {
    id: 1,
    firstName: "Vitalii",
    lastName: "Perozhak",
    email: "vitalii.perozhak@gmail.com",
    password: "1111111Qq",
  },
  {
    id: 2,
    firstName: "Vitalii",
    lastName: "Perozhak",
    email: "vitalii.perozhak@noble.codes",
    password: "1111111Qq",
  },
  {
    id: 3,
    firstName: "Olena",
    lastName: "Gul",
    email: "olena.gul@gmail.com",
    password: "1111111Qq",
  },
  {
    id: 4,
    firstName: "Nata",
    lastName: "Kuzo",
    email: "nata.kuzo@gmail.com",
    password: "1111111Qq",
  },
  {
    id: 5,
    firstName: "Vasyl",
    lastName: "Liutan",
    email: "vasyl.liutan@gmail.com",
    password: "1111111Qq",
  },
  {
    id: 6,
    firstName: "Christina",
    lastName: "Karpinets",
    email: "chris.karpinets@gmail.com",
    password: "1111111Qq",
  },
];

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
        </Route>
      </Route>
      <Route path="/login" element={<Login />} />
    </>
  )
);

export const CurrentUserContext = createContext();

const App = () => {
  return (
    <CurrentUserContext.Provider
      value={{
        getCurrentUser: () => localStorage.getItem("currUser"),
      }}
    >
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </CurrentUserContext.Provider>
  );
};

export default App;
