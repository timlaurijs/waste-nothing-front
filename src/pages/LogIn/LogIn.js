import React from "react";
import { Link } from "react-router-dom";

export default function LogIn() {
  return (
    <div>
      Don't have an account?{" "}
      <Link to="/signUp" style={{ textAlign: "center" }}>
        Sign up
      </Link>
    </div>
  );
}
