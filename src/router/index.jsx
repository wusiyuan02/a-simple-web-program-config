/*
 * 路由配置页
 * App > List + Edit + Means
 * Login
 * Register
 */
import React from "react";
import App from "../App.jsx";
import Login from "../pages/Login/login.jsx";
import Register from "../pages/Register/register.jsx";
import List from "../pages/List/list.jsx";
import Edit from "../pages/Edit/edit.jsx";
import Means from "../pages/Means/means.jsx";
import NoMatch from "../pages/NoMatch/index.jsx";

import { HashRouter as Router, Route, Routes } from "react-router-dom";

const baseRouterItems = [
  {
    key: "*",
    element: <NoMatch />,
    children: [],
  },
  {
    key: "/user",
    element: <App />,
    children: [
      {
        key: "lists",
        element: <List />,
        children: [
          {
            key: "list1",
            element: <List />,
            children: [],
          },
        ],
      },
      {
        key: "edit",
        element: <Edit />,
        children: [],
      },
      {
        key: "means",
        element: <Means />,
        children: [],
      },
    ],
  },
  {
    key: "/",
    element: <Login />,
    children: [],
  },
  {
    key: "/login",
    element: <Login />,
    children: [],
  },
  {
    key: "/register",
    element: <Register />,
    children: [],
  },
];

const BaseRouter = () => {
  return (
    <Router>
      <Routes>
        {baseRouterItems.map((item) => (
          <Route key={item.key} path={item.key} element={item.element}>
            {item?.children.length > 0 &&
              item.children.map((child) => (
                <Route key={child.key} path={child.key} element={child.element}>
                  {child?.children.length > 0 &&
                    child.children.map((child1) => (
                      <Route
                        key={child1.key}
                        path={child1.key}
                        element={child1.element}
                      ></Route>
                    ))}
                </Route>
              ))}
          </Route>
        ))}
      </Routes>
    </Router>
  );
};

export default BaseRouter;
