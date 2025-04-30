import React from "react";
import { Link } from "react-router";

function PageNotFound() {
  return (
    <div className="mt-50 flex justify-center flex-col items-center">
      <h1 className=" font-bold text-3xl">404 Page not found</h1>
      <Link to={"/"} className=" text-blue-400 cursor-pointer">
        Back to Home
      </Link>
    </div>
  );
}

export default PageNotFound;