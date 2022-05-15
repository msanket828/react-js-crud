import React, { useEffect, useState } from "react";
import SingleEmployeeDetail from "./SingleEmployeeDetail/SingleEmployeeDetail";

const EmployeeDetailsTable = (props) => {
  const [filteredEmpData, setFilteredEmpData] = useState(props.employeeDetails);
  const [editDataId, setEditDataId] = useState("");

  useEffect(() => {
    setFilteredEmpData(props.employeeDetails);
  }, [props.employeeDetails]);

  const handleDelete = (id) => {
    let newData = filteredEmpData.filter((emp) => id != emp.id);
    setFilteredEmpData(newData);
  };

  const handleEdit = (editData) => {
    // console.log(props.newUpdatedData);
    setEditDataId(editData);
    props.onHandleEdit(editData);
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
        {filteredEmpData.length < 1 ? (
          <tr>
            <td className="text-center" colSpan={5}>
              <h3 className="display-5">No Record Found</h3>
            </td>
          </tr>
        ) : (
          filteredEmpData.map((emp) => (
            <SingleEmployeeDetail
              key={emp.id}
              id={emp.id}
              name={emp.name}
              design={emp.design}
              salary={emp.salary}
              onDeleteId={handleDelete}
              onHandleEdit={handleEdit}
            />
          ))
        )}
      </tbody>
    </table>
  );
};

export default EmployeeDetailsTable;
