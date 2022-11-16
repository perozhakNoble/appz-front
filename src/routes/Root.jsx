import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { UserIcon, ChartBarSquareIcon } from "@heroicons/react/24/outline";
import { useAuth } from "../hooks/useAuth";

function Root() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout(() => navigate("/login"));
  };

  return (
    <>
      <div className="fixed h-full w-64">
        <div id="sidebar" className="flex h-full">
          <h1>ІКСХА</h1>
          <nav>
            <ul>
              <li>
                <Link to={`profile`}>
                  <UserIcon className="w-6" />

                  <div>Профіль</div>
                </Link>
              </li>
              <li>
                <Link to={`stats`}>
                  <ChartBarSquareIcon className="w-6" />
                  <div>Статистика</div>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="w-full ml-64 sticky">
        <div className="bg-slate-200 border-b-[1px] border-gray-300 h-16 ">
          <div>
            <h3 className="block ml-auto mr-0 w-20 pt-4 text-lg cursor-pointer" onClick={handleLogout}>
              Вийти
            </h3>
          </div>
        </div>
        <div id="detail">
          <Outlet />
        </div>
      </div>
    </>
  );
}
export default Root;
