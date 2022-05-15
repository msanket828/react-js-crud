import React, { useState } from "react";
import EmployeeDetailsTable from "./EmployeeDetailsTable/EmployeeDetailsTable";
import EmployeeUpdatePopup from "./EmployeeUpdatePopup/EmployeeUpdatePopup";

const EmployeeDetails = (props) => {
  const [editData, setEditData] = useState("");
  const [newUpdatedData, setNewUpdatedData] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleEdit = (editData) => {
    setEditData(editData);
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const updatedData = (actualUpdatedData) => {
    setNewUpdatedData(actualUpdatedData);
  };

  return (
    <div className="employee-details mid-wrapper">
      <div className="employee-details__container">
        <EmployeeDetailsTable
          employeeDetails={props.employeeDetails}
          onHandleEdit={handleEdit}
          newUpdatedData={newUpdatedData}
        />
        <EmployeeUpdatePopup
          editData={editData}
          isModalOpen={isModalOpen}
          onHandleClose={handleClose}
          onUpdatedData={updatedData}
        />
      </div>
    </div>
  );
};

export default EmployeeDetails;
