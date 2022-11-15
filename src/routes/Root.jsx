import React from "react";
import { Link, Outlet } from "react-router-dom";
import { UserIcon, ChartBarSquareIcon } from "@heroicons/react/24/outline";

function Root() {
  return (
    <>
      <div id="sidebar">
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
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
export default Root;
