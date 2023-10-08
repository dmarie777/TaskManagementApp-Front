import React, { Children } from "react";
import { Navigate } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function ProtectedRoutes({ children }) {
  const token = cookies.get("TOKEN");

    if (!token) {
      return <Navigate to = "/" />;
    } else {
      return children
    }
}