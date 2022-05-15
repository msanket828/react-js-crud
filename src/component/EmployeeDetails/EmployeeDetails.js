import React from "react";
import EmployeeDetailsTable from "./EmployeeDetailsTable/EmployeeDetailsTable";

const EmployeeDetails = (props) => {
  const handleEdit = (editData) => {
    props.onHandleEdit(editData);
  };

  return (
    <div className="employee-details mid-wrapper">
      <div className="employee-details__container">
        <EmployeeDetailsTable
          employeeDetails={props.employeeDetails}
          onHandleEdit={handleEdit}
        />
      </div>
    </div>
  );
};

export default EmployeeDetails;
