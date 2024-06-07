import React, { useState } from "react";

export const CustomerForm = ({ addUser }) => {
  const [user, setUser] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    addUser(user);
  };

  return (
    <div className="w-60  bg-danger p-5 m-auto mt-5 rounded shadow-lg ">
      <form action="" onSubmit={handleOnSubmit}>
        <div className="row g-2">
          <div className="col-md-3">
            <select
              name="gender"
              className="form-select"
              id="autoSizingSelect"
              required
              defaultValue=""
              onChange={handleOnChange}
            >
              <option value="">Choose...</option>
              <option value="m">Male</option>
              <option value="f">Female</option>
              <option value="n">Not specified</option>
            </select>
          </div>
          <div className="col-md-6">
            <input
              name="name"
              type="text"
              className="form-control"
              placeholder="User Name"
              aria-label="User Name"
              required
              onChange={handleOnChange}
            />
          </div>
          <div className="col-md-3 d-grid">
            <button className="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};
