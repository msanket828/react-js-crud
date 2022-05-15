import "./App.css";
import Header from "./component/Header/Header";
import EmployeeForm from "./component/EmployeeForm/EmployeeForm";
import EmployeeDetails from "./component/EmployeeDetails/EmployeeDetails";
import { useState } from "react";

function App() {
  const employeeDetails = [
    {
      id: 1,
      name: "Sanket Mane",
      design: "UI developer | React js",
      salary: 35000,
    },
    {
      id: 2,
      name: "Aditya Sawant",
      design: "Front End React Js developer",
      salary: 45000,
    },
    {
      id: 3,
      name: "Sanket Patil",
      design: "Angular Front end developer",
      salary: 25000,
    },
    {
      id: 4,
      name: "Aniket Shrirao",
      design: "Full stack web developer",
      salary: 50000,
    },
  ];

  const [empData, setEmpData] = useState(employeeDetails);

  const handleSaveEmployeeData = (newEmpData) => {
    setEmpData((prevState) => {
      return [newEmpData, ...prevState];
    });
  };

  return (
    <main className="main">
      <Header />
      <EmployeeForm onSaveEmployeeData={handleSaveEmployeeData} />
      <EmployeeDetails employeeDetails={empData} />
    </main>
  );
}

export default App;
