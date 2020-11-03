import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      THIS IS HOME
      <br />
      <Link to="/login">Click here to log in</Link>
    </div>
  );
}
