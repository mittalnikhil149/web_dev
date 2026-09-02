import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="mt-3 mb-4">

      <Link to="/" className="btn btn-primary mx-2">
        Registration
      </Link>

      <Link to="/student" className="btn btn-success mx-2">
        Student
      </Link>

      <Link to="/counter" className="btn btn-warning mx-2">
        Counter
      </Link>

    </div>
  );
};

export default Header;