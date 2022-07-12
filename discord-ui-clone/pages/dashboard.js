import React from "react";
import { useAuth } from "../context/AuthContext";

function dashboard() {
  const { user } = useAuth();

  console.log(user);

  return <div>{user.email}</div>;
}

export default dashboard;
