import React from "react";
import { Link } from "react-router-dom";
import Layouts from "../Components/Layout/Layouts";

const PageNotFound = () => {
  return (
    <Layouts title={"go back- page not found"}>
      <div className="pnf">
        <h1 className="pnf-title">404</h1>
        <h2 className="pnf-heading">Oops ! Page Not Found</h2>
        <Link to="/" className="pnf-btn">
          Go Back
        </Link>
      </div>
    </Layouts>
  );
};

export default PageNotFound;
