import React, { useState } from "react";

const Registration2 = () => {
  const [check, setCheck] = useState(false);

  const [formdata, setFormdata] = useState({
    user: "",
    pswd: "",
  });

  // Input ka data state me save karna
  const handleForm = (event) => {
    const { name, value } = event.target;

    setFormdata({...formdata,[name]: value,});
  };

  // Form submit
  const handlesubmite = (e) => {
    e.preventDefault();
    setCheck(true);
  };

  return (
    <div className="container-fluid min-vh-100 bg-light d-flex justify-content-center align-items-center">
      <div
        // className="card shadow-lg border-0 rounded-4 p-4"
        // style={{ width: "400px" }}
      >
        <div className="text-center mb-4">
          <h2 className="fw-bold text-primary">Registration</h2>

          <p className="text-muted mb-0">Create your account</p>
        </div>

        <form onSubmit={handlesubmite}>
          {/* Username */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Username</label>

            <input
              type="text"
              name="user"
              className="form-control form-control-lg"
              placeholder="Enter your username"
              value={formdata.user}
              onChange={handleForm}
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="form-label fw-semibold">Password</label>

            <input
              type="password"
              name="pswd"
              className="form-control form-control-lg"
              placeholder="Enter password"
              value={formdata.pswd}
              onChange={handleForm}
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary btn-lg">
              Sign Up
            </button>
          </div>
        </form>
      </div>

      {/* Submit ke baad DisplayReg chalega */}
      {check && <DisplayReg formdata={formdata.user} />}
    </div>
  );
};

const DisplayReg = (props) => {
  const { user, pswd } = props.formdata;

  return (
    <div className="card p-3 mt-3">
      <h3>User: {user}</h3>

      <h3>Password: {pswd}</h3>
    </div>
  );
};

export default Registration2;
