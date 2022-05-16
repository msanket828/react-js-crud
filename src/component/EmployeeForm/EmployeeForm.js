import React, { useEffect, useState } from "react";

const EmployeeForm = (props) => {
  const [name, setName] = useState("");
  const [design, setDesign] = useState("");
  const [salary, setSalary] = useState("");

  let formHeading=props.isEditClick ? 
                  (<h3 className="text-center mb-3">Update Employee Details</h3>):
                  (<h3 className="text-center mb-3">Add New Employee Details</h3>);

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
    if (!props.isEditClick) {
      const enteredEmployeeData = {
        id: Math.random(),
        name,
        design,
        salary,
      };
      props.onSaveEmployeeData(enteredEmployeeData);
    } else {
      const enteredUpdatedEmployeeData = {
        id: props.editData.id,
        name,
        design,
        salary,
      };
      props.onSaveUpdatedEmployeeData(enteredUpdatedEmployeeData);
    }

    setName("");
    setDesign("");
    setSalary("");
  };

  useEffect(() => {
    setName(props.editData.name);
    setDesign(props.editData.design);
    setSalary(props.editData.salary);
  }, [props.editData.name, props.editData.design, props.editData.salary]);

  return (
    <div className="employee-form small-wrapper">
      <div className="container">
        { formHeading }
        <div className="employee-form__container py-4">
          <form action="" onSubmit={handleSubmitEmployeeForm}>
            <div className="form-group floating-input">
              <input
                type="text"
                name=""
                className="form-control form-control-v1"
                id=""
                placeholder=" "
                value={name || ''}
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
                value={design || ''}
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
                value={salary || ''}
                onChange={handleEnteredSalary}
              />
              <label htmlFor="">Salary</label>
            </div>
            {props.isEditClick ? (
              <button type="submit" className="btn btn-primary">
                Update
              </button>
            ) : (
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmployeeForm;
