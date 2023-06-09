import React from "react";
import { Link } from "react-router-dom";

export const Education = () => {
  return (
    <div className="text-black text-center">
      {" "}
      This is education page
      <Link to="/">go back to dashboard</Link>
    </div>
  );
};
