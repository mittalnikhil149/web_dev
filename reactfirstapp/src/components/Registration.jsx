import React, { useState } from "react";

const Registration = () => {
  const [user, setUser] = useState({
    name: "",
    number: "",
    password: "",
  });

  return (
    <div className="container-fluid min-vh-100 bg-light d-flex justify-content-center align-items-center">

      <div className="card shadow-lg p-4" style={{ width: "400px" }}>

        <div className="text-center mb-4">
          <h2 className="fw-bold text-primary">Registration</h2>
          <p className="text-muted">Create your account</p>
        </div>

        <form>

          <div className="mb-3">
            <label className="form-label">Name</label>

            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              value={user.name}
              onChange={(e) =>
                setUser({ ...user, name: e.target.value })
              }
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Mobile Number</label>

            <input
              type="tel"
              className="form-control"
              placeholder="Enter mobile number"
              value={user.number}
              onChange={(e) =>
                setUser({ ...user, number: e.target.value })
              }
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Password</label>

            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={user.password}
              onChange={(e) =>
                setUser({ ...user, password: e.target.value })
              }
            />
          </div>

          <button className="btn btn-primary w-100">
            Sign Up
          </button>

        </form>

      </div>
    </div>
  );
};

export default Registration;