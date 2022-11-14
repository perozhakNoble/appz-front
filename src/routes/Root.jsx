import React from "react";
import { Link, Outlet } from "react-router-dom";
import { getTestData } from "../services/test";

export async function loader() {
  const test = await getTestData();
  return { test };
}

function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>ІКСХА</h1>
        <nav>
          <ul>
            <li>
              <Link to={`profile`}>Профіль</Link>
            </li>
            <li>
              <Link to={`stats`}>Статистика</Link>
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
