import React, { useState } from "react";

const Registration3 = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    dob: "",
    gender: "",
    course: "Flutter",
    skills: [],
    country: "USA",
    address: "",
    website: "",
    time: "",
    color: "#d6a7b3",
    experience: 5,
    photo: null,
    terms: false
  });

  const handleForm = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSkill = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setFormData({
        ...formData,
        skills: [...formData.skills, value]
      });
    } else {
      setFormData({
        ...formData,
        skills: formData.skills.filter((x) => x !== value)
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Registration Successful!");
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      password: "",
      age: "",
      dob: "",
      gender: "",
      course: "Flutter",
      skills: [],
      country: "USA",
      address: "",
      website: "",
      time: "",
      color: "#d6a7b3",
      experience: 5,
      photo: null,
      terms: false
    });
  };

  return (

    <div className="container-fluid bg-light min-vh-100 py-4">

      <div className="container">

        <div className="card shadow-sm">

          {/* Heading */}
          <div className="bg-warning text-center py-3">
            <h1 className="fw-bold mb-0">
              Registration Form
            </h1>
          </div>

          <div className="card-body">

            <form onSubmit={handleSubmit}>

              {/* Name */}
              <div className="mb-3">
                <label className="form-label fs-5">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleForm}
                />
              </div>

              {/* Email */}
              <div className="mb-3">
                <label className="form-label fs-5">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleForm}
                />
              </div>

              {/* Password */}
              <div className="mb-3">
                <label className="form-label fs-5">
                  Password
                </label>

                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleForm}
                />
              </div>

              {/* Age */}
              <div className="mb-3">
                <label className="form-label fs-5">
                  Age
                </label>

                <input
                  type="number"
                  name="age"
                  className="form-control"
                  value={formData.age}
                  onChange={handleForm}
                />
              </div>

              {/* Date */}
              <div className="mb-3">
                <label className="form-label fs-5">
                  Date of Birth
                </label>

                <input
                  type="date"
                  name="dob"
                  className="form-control"
                  value={formData.dob}
                  onChange={handleForm}
                />
              </div>

              {/* Gender */}
              <div className="mb-3">

                <label className="form-label fs-5">
                  Gender
                </label>

                <div className="d-flex gap-4">

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      value="Male"
                      onChange={handleForm}
                    />
                    <label className="form-check-label">
                      Male
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      value="Female"
                      onChange={handleForm}
                    />
                    <label className="form-check-label">
                      Female
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      value="Other"
                      onChange={handleForm}
                    />
                    <label className="form-check-label">
                      Other
                    </label>
                  </div>

                </div>
              </div>

              {/* Course */}
              <div className="mb-3">

                <label className="form-label fs-5">
                  Select Course
                </label>

                <select
                  name="course"
                  className="form-select"
                  value={formData.course}
                  onChange={handleForm}
                >
                  <option>Flutter</option>
                  <option>React</option>
                  <option>Java</option>
                  <option>Python</option>
                </select>

              </div>

              {/* Skills */}
              <div className="mb-3">

                <label className="form-label fs-5">
                  Skills
                </label>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Java"
                    onChange={handleSkill}
                  />
                  <label className="form-check-label">
                    Java
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="React"
                    onChange={handleSkill}
                  />
                  <label className="form-check-label">
                    React
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Python"
                    onChange={handleSkill}
                  />
                  <label className="form-check-label">
                    Python
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Flutter"
                    onChange={handleSkill}
                  />
                  <label className="form-check-label">
                    Flutter
                  </label>
                </div>

              </div>

              {/* Country */}
              <div className="mb-3">

                <label className="form-label fs-5">
                  Country
                </label>

                <select
                  name="country"
                  className="form-select"
                  value={formData.country}
                  onChange={handleForm}
                >
                  <option>USA</option>
                  <option>India</option>
                  <option>Canada</option>
                  <option>UK</option>
                  <option>Australia</option>
                </select>

              </div>

              {/* Address */}
              <div className="mb-3">

                <label className="form-label fs-5">
                  Address
                </label>

                <textarea
                  name="address"
                  className="form-control"
                  rows="4"
                  placeholder="Enter your address"
                  value={formData.address}
                  onChange={handleForm}
                />

              </div>

              {/* Website */}
              <div className="mb-3">

                <label className="form-label fs-5">
                  Website
                </label>

                <input
                  type="url"
                  name="website"
                  className="form-control"
                  placeholder="https://example.com"
                  value={formData.website}
                  onChange={handleForm}
                />

              </div>

              {/* Time */}
              <div className="mb-3">

                <label className="form-label fs-5">
                  Preferred Time
                </label>

                <input
                  type="time"
                  name="time"
                  className="form-control"
                  value={formData.time}
                  onChange={handleForm}
                />

              </div>

              {/* Color */}
              <div className="mb-3">

                <label className="form-label fs-5">
                  Favorite Color
                </label>

                <br />

                <input
                  type="color"
                  name="color"
                  value={formData.color}
                  onChange={handleForm}
                />

              </div>

              {/* Experience */}
              <div className="mb-4">

                <label className="form-label fs-5">
                  Experience: {formData.experience} Years
                </label>

                <input
                  type="range"
                  name="experience"
                  className="form-range"
                  min="0"
                  max="20"
                  value={formData.experience}
                  onChange={handleForm}
                />

              </div>

              {/* Photo */}
              <div className="mb-3">

                <label className="form-label fs-5">
                  Upload Photo
                </label>

                <input
                  type="file"
                  className="form-control"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      photo: e.target.files[0]
                    })
                  }
                />

              </div>

              {/* Terms */}
              <div className="form-check mb-4">

                <input
                  type="checkbox"
                  className="form-check-input"
                  id="terms"
                  checked={formData.terms}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      terms: e.target.checked
                    })
                  }
                />

                <label
                  className="form-check-label"
                  htmlFor="terms"
                >
                  I agree to the Terms and Conditions
                </label>

              </div>

              {/* Buttons */}
              <div className="text-center">

                <button
                  type="submit"
                  className="btn btn-primary me-2"
                >
                  Register
                </button>

                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleReset}
                >
                  Reset
                </button>

              </div>

            </form>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Registration3;