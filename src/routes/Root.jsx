import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  UserIcon,
  ChartBarSquareIcon,
  ChatBubbleBottomCenterTextIcon,
  DocumentTextIcon,
  IdentificationIcon,
  HandRaisedIcon,
} from "@heroicons/react/24/outline";
import { useAuth } from "../hooks/useAuth";

function Root() {
  const navigate = useNavigate();
  const { logout, user, getRole, isAdmin } = useAuth();

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
                <Link to={`communicate`}>
                  <ChatBubbleBottomCenterTextIcon className="w-6" />
                  <div>Комунікація</div>
                </Link>
              </li>
              <li>
                <Link to={`info`}>
                  <DocumentTextIcon className="w-6" />
                  <div>Інформація</div>
                </Link>
              </li>
              {isAdmin && (
                <li>
                  <Link to={`indentify`}>
                    <IdentificationIcon className="w-6" />
                    <div>Облік осіб</div>
                  </Link>
                </li>
              )}
              <li>
                <Link to={`help`}>
                  <HandRaisedIcon className="w-6" />
                  <div>Допомога</div>
                </Link>
              </li>
              {isAdmin && (
                <li>
                  <Link to={`stats`}>
                    <ChartBarSquareIcon className="w-6" />
                    <div>Статистика</div>
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
      <div className="w-full ml-64 sticky">
        <div className="bg-slate-200 border-b-[1px] border-gray-300 h-16 ">
          <div className="flex">
            <h3 className="block ml-5 w-96 pt-4 text-lg text-gray-500 ">
              {user.firstName + " " + user.lastName + " - " + getRole()}
            </h3>
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
