import React from "react";
import { NavLink } from "react-router-dom";


const Header = () => {
  const isActive = ({ isActive }) => ({
  color: isActive ? "red" : "black",
  fontWeight: isActive ? "bold" : "normal"
  });
  return (
    <div className="mt-3 mb-4">

      <NavLink to="/" className="btn btn-primary mx-2"
      style={isActive}>
        Registration
      </NavLink>

      <NavLink to="/student" className="btn btn-success mx-2"
      style={isActive}>
        Student
      </NavLink>

      <NavLink to="/counter" className="btn btn-warning mx-2"
      style={isActive}>
        Counter
      </NavLink>

      <NavLink to="/product/1" className="btn btn-info mx-2"
      style={isActive}>
        Product
      </NavLink>
      <NavLink to="/courses" className="btn btn-info mx-2"
      style={isActive}>
        courses
      </NavLink>
      <NavLink to="/contact" className="btn btn-secondary mx-2"
      style={isActive}>
        Contact
      </NavLink>

    </div>
  );
};

export default Header;