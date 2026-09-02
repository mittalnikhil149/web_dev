import React, { useState } from "react";
import Student from "./student";

const Body = () => {

  const [studentInfo] = useState([
    { id: 1, name: "Student 1", marks: 90, clas: "MCA-C" },
    { id: 2, name: "Student 2", marks: 85, clas: "MCA-A" },
    { id: 3, name: "Student 3", marks: 75, clas: "MCA-C" },
    { id: 4, name: "Student 4", marks: 65, clas: "MCA-B" },
    { id: 5, name: "Student 5", marks: 95, clas: "MCA-D" },
  ]);

  return (
    <div>

      <h2>Student Information</h2>

      <table className="table">

        <thead className="table-dark">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Marks</th>
            <th>Section</th>
          </tr>
        </thead>

        <tbody>
          {studentInfo.map((row) => (
            <Student
              key={row.id}
              id={row.id}
              name={row.name}
              marks={row.marks}
              section={row.clas}
            />
          ))}
        </tbody>

      </table>

    </div>
  );
};

export default Body;