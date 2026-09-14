import { NavLink, Outlet } from "react-router-dom";

const Courses = () => {
  return (
    <div>
      <h2>Select your Course</h2>
      <nav>
        <NavLink to="offline" className="m-3">Offline</NavLink>
        <NavLink to="online">Online</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Courses;
