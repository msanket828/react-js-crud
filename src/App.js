import { useState } from "react";
import "./App.css";
import EmployeeDetails from "./component/EmployeeDetails/EmployeeDetails";
import EmployeeForm from "./component/EmployeeForm/EmployeeForm";
import Header from "./component/Header/Header";

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

  const [isEditClick, setIsEditClick] = useState(false);
  const [editData, setEditData] = useState("");

  const handleEdit = (editData) => {
    setIsEditClick(true);
    setEditData(editData);
  };

  const handleSubmitEmployeeForm = (updatedEmpData) => {
    let newData=[...empData];    
    let findIndexForUpdate = empData.findIndex((emp) => emp.id == updatedEmpData.id);
    newData[findIndexForUpdate] = updatedEmpData;
    setEmpData(newData);
    setIsEditClick(false);
  };

  const handleDelete = (id) => {
    let newData = empData.filter((emp) => id != emp.id);
    setEmpData(newData);
  }

  return (
    <main className="main">
      <Header />      
      <EmployeeForm
        onSaveEmployeeData={handleSaveEmployeeData}
        editData={editData}
        isEditClick={isEditClick}
        onSaveUpdatedEmployeeData={handleSubmitEmployeeForm}        
      />
      <EmployeeDetails employeeDetails={empData} onHandleEdit={handleEdit} onHandleDelete={handleDelete} />
    </main>
  );
}

export default App;
