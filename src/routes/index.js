import React from "react";
import { Navigate } from "react-router-dom";
import Event from "pages/Event";
import UserProfile from "../pages/Authentication/user-profile";
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
import ForgetPwd from "../pages/Authentication/ForgetPassword";
import Dashboard from "../pages/Dashboard/index";

const authProtectedRoutes = [
  { path: "/dashboard", component: <Dashboard /> },
  // //profile
  { path: "/profile", component: <UserProfile /> },
  { path: "/event", component: <Event /> },
  {
    path: "/",
    exact: true,
    component: <Navigate to="/dashboard" />,
  },
];

const publicRoutes = [
  { path: "/login", component: <Login /> },
  { path: "/logout", component: <Logout /> },
  { path: "/forgot-password", component: <ForgetPwd /> },
  { path: "/register", component: <Register /> },
];

export { authProtectedRoutes, publicRoutes };
