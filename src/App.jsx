import React, { createContext } from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import ErrorPage from "./components/ErrorPage";
import Index from "./routes/Index";
import Profile from "./routes/Profile";
import Stats from "./routes/Stats";
import Expenses, { loader as expensesLoader } from "./routes/Expenses";
import Graph, { loader as graphLoader } from "./routes/Graph";

const USERS = [
  {
    id: 1,
    firstName: "Vitalii",
    LastName: "Perozhak",
    email: "vitalii.perozhak@gmail.com",
    password: "11111111Qq",
  },
];

localStorage.setItem("users", JSON.stringify(USERS));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Index />} />

        <Route path="profile" element={<Profile />} />
        <Route path="stats" element={<Stats />}></Route>
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
      <RouterProvider router={router} />
    </CurrentUserContext.Provider>
  );
};

export default App;
