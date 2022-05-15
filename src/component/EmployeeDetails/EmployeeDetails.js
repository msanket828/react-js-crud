import React from "react";
import EmployeeDetailsTable from "./EmployeeDetailsTable/EmployeeDetailsTable";

const EmployeeDetails = (props) => {
  return (
    <div className="employee-details mid-wrapper">
      <div className="employee-details__container">
        <EmployeeDetailsTable employeeDetails={props.employeeDetails} />
      </div>
    </div>
  );
};

export default EmployeeDetails;
