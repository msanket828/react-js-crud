import React from "react";

const EmployeeForm = () => {
  return (
    <div className="employee-form mid-wrapper">
      <div className="container">
        <div className="employee-form__container py-4">
          <form action="">
            <div className="form-group floating-input">
              <input
                type="text"
                name=""
                className="form-control form-control-v1"
                id=""
                placeholder=" "
              />
              <label htmlFor="">Name</label>
            </div>
            <div className="form-group floating-input">
              <input
                type="text"
                name=""
                className="form-control form-control-v1"
                id=""
                placeholder=" "
              />
              <label htmlFor="">Designation</label>
            </div>
            <div className="form-group floating-input">
              <input
                type="number"
                name=""
                className="form-control form-control-v1"
                id=""
                placeholder=" "
              />
              <label htmlFor="">Salary</label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmployeeForm;
