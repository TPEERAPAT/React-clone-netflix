import React from "react";
import { Navigate } from "react-router";
import { UserAuth } from "../context/AuthContext";

//  การทำหน้า accou ให้มีการป้องกัน
const ProtectedRoutse = ({ children }) => {
  const { user } = UserAuth();

  if (!user) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
};

export default ProtectedRoutse;
