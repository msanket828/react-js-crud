import React from "react";

const SingleEmployeeDetail = (props) => {
  const handleDelete = (id) => {
    props.onDeleteId(id);
  };
  const handleEdit = (editData) => {
    props.onHandleEdit(editData);
  };
  
  return (
    <tr>
      <td data-label="Employee Name">{props.name}</td>
      <td data-label="Employee Designation">{props.design}</td>
      <td data-label="Employee Salary">
        <p>
          <span className="mr-1">&#x20B9;</span>
          {props.salary}
        </p>
      </td>
      <td data-label="Actions">
        <div className="d-flex">
          <span
            className="del-cta mr-lg-0 mr-2"
            role="button"
            onClick={() => handleDelete(props.id)}
          >
            <i className="fa fa-trash-o" aria-hidden="true"></i>
          </span>
          <span
            className="update-cta d-lg-none d-flex"
            role="button"
            onClick={() => handleEdit(props)}
          >
            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
          </span>
        </div>
      </td>
      <td className="d-lg-table-cell d-none">
        <span
          className="update-cta"
          role="button"
          onClick={() => handleEdit(props)}
        >
          <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
        </span>
      </td>
    </tr>
  );
};

export default SingleEmployeeDetail;
