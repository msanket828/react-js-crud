import React from "react";
import SingleEmployeeDetail from "./SingleEmployeeDetail/SingleEmployeeDetail";

const EmployeeDetailsTable = (props) => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Employee Name</th>
          <th>Employee Designation</th>
          <th>Employee Salary</th>
          <th colSpan={2}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.employeeDetails.map((emp) => (
          <SingleEmployeeDetail
            key={emp.id}
            name={emp.name}
            design={emp.design}
            salary={emp.salary}
          />
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeDetailsTable;
