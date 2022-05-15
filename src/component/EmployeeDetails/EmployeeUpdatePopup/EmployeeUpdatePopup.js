import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";

const EmployeeUpdatePopup = (props) => {
  const [updatedName, setUpdatedName] = useState(props.editData.name);
  const [updatedDesign, setUpdatedDesign] = useState(props.editData.design);
  const [updatedSalary, setUpdatedSalary] = useState(props.editData.salary);

  const handleClose = () => {
    props.onHandleClose();
  };

  const handleSubmitEmployeeForm = (e) => {
    e.preventDefault();
    const actualUpdatedData = {
      name: updatedName,
      desgin: updatedDesign,
      salary: updatedSalary,
    };
    props.onUpdatedData(actualUpdatedData);
  };

  useEffect(() => {
    setUpdatedName(props.editData.name);
    setUpdatedDesign(props.editData.design);
    setUpdatedSalary(props.editData.salary);
  }, [props.editData.name, props.editData.design, props.editData.salary]);

  const handleEnteredName = (e) => {
    setUpdatedName(e.target.value);
  };

  const handleEnteredDesign = (e) => {
    setUpdatedDesign(e.target.value);
  };

  const handleEnteredSalary = (e) => {
    setUpdatedSalary(e.target.value);
  };

  return (
    <>
      <Modal show={props.isModalOpen} onHide={handleClose}>
        <Modal.Header closeButton className="border-0 ml-auto"></Modal.Header>
        <Modal.Body>
          <h4 className="font-bold mb-4 text-center">
            Update Employee Information
          </h4>
          <form action="" onSubmit={handleSubmitEmployeeForm}>
            <div className="form-group floating-input">
              <input
                type="text"
                name=""
                className="form-control form-control-v1"
                id=""
                placeholder=" "
                value={updatedName}
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
                value={updatedDesign}
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
                value={updatedSalary}
                onChange={handleEnteredSalary}
              />
              <label htmlFor="">Salary</label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EmployeeUpdatePopup;
