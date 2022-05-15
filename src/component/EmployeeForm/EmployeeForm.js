import React, { useState } from "react";

const EmployeeForm = (props) => {
  const [name, setName] = useState("");
  const [design, setDesign] = useState("");
  const [salary, setSalary] = useState("");

  const handleEnteredName = (e) => {
    setName(e.target.value);
  };

  const handleEnteredDesign = (e) => {
    setDesign(e.target.value);
  };

  const handleEnteredSalary = (e) => {
    setSalary(e.target.value);
  };

  const handleSubmitEmployeeForm = (e) => {
    e.preventDefault();
    const enteredEmployeeData = {
      id: Math.random(),
      name,
      design,
      salary,
    };
    props.onSaveEmployeeData(enteredEmployeeData);
    setName("");
    setDesign("");
    setSalary("");
  };

  return (
    <div className="employee-form mid-wrapper">
      <div className="container">
        <div className="employee-form__container py-4">
          <form action="" onSubmit={handleSubmitEmployeeForm}>
            <div className="form-group floating-input">
              <input
                type="text"
                name=""
                className="form-control form-control-v1"
                id=""
                placeholder=" "
                onChange={handleEnteredName}
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
                onChange={handleEnteredDesign}
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
                onChange={handleEnteredSalary}
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
