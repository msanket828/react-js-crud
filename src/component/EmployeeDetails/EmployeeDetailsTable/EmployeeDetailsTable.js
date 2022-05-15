import React, { useState } from "react";
import SingleEmployeeDetail from "./SingleEmployeeDetail/SingleEmployeeDetail";

const EmployeeDetailsTable = (props) => {
  const [filteredEmpData, setFilteredEmpData] = useState(props.employeeDetails);

  const handleDelete = (id) => {
    let newData = filteredEmpData.filter((emp) => id != emp.id);
    setFilteredEmpData(newData);
    console.log(filteredEmpData);
  };

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
        {filteredEmpData.map((emp) => (
          <SingleEmployeeDetail
            key={emp.id}
            id={emp.id}
            name={emp.name}
            design={emp.design}
            salary={emp.salary}
            onDeleteId={handleDelete}
          />
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeDetailsTable;
