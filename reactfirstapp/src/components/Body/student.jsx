import React from "react";

const Student = (props) => {

  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.marks}</td>
      <td>{props.section}</td>
    </tr>
  );

};

export default Student;