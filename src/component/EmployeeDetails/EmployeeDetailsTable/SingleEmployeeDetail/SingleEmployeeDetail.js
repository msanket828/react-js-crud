import React from "react";

const SingleEmployeeDetail = (props) => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.design}</td>
      <td>
        <span className="mr-1">&#x20B9;</span>
        {props.salary}
      </td>
      <td>
        <span className="del-cta">Delete</span>
      </td>
      <td>
        <span className="update-cta">Update</span>
      </td>
    </tr>
  );
};

export default SingleEmployeeDetail;
