import React, { useState } from "react";

const SingleEmployeeDetail = (props) => {
  const handleDelete = (id) => {
    props.onDeleteId(id);
  };
  const handleEdit = (editData) => {
    props.onHandleEdit(editData);
  };

  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.design}</td>
      <td>
        <span className="mr-1">&#x20B9;</span>
        {props.salary}
      </td>
      <td>
        <span
          className="del-cta"
          role="button"
          onClick={() => handleDelete(props.id)}
        >
          <i className="fa fa-trash-o" aria-hidden="true"></i>
        </span>
      </td>
      <td>
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
