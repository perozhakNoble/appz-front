import { createContext, useContext, useMemo } from "react";
import { useLocalStorage } from "./useLocalStorage";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);

  // call this function when you want to authenticate the user
  const login = (data, callback) => {
    const users = JSON.parse(localStorage.getItem("users"));
    if (!data) throw new Error("Щось пішло не так..");
    if (!data.username) throw new Error("Введіть пошту");
    if (!data.password) throw new Error("Введіть пароль");

    const userExists = users.find((usr) => usr.email === data.username && usr.password === data.password);
    if (userExists) {
      setUser(userExists);
      callback();
    } else {
      const checkPassword = users.find((usr) => usr.email === data.username);
      if (checkPassword) throw new Error("Пароль невірний");
      throw new Error("Користувача не знайдено");
    }
  };

  // call this function to sign out logged in user
  const logout = (callback) => {
    setUser(null);
    callback();
  };

  const update = (data, callback) => {
    const users = JSON.parse(localStorage.getItem("users"));
    const userExists = users.find((usr) => usr.id === user.id);
    for (const key of Object.keys(data)) {
      userExists[key] = data[key];
    }

    localStorage.setItem("users", JSON.stringify(users.filter((usr) => usr.id !== user.id).concat(userExists)));

    setUser(userExists);
    callback();
  };

  const isAdmin = user?.role === "Admin";
  const isUser = user?.role === "User";

  const getRole = () => {
    return isAdmin ? "Адміністратор" : isUser ? "Користувач" : "";
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
      update,
      isUser,
      isAdmin,
      getRole,
    }),
    // eslint-disable-next-line
    [user]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
