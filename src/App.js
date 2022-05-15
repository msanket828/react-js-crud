import "./App.css";
import Header from "./component/Header/Header";
import EmployeeForm from "./component/EmployeeForm/EmployeeForm";
import EmployeeDetails from "./component/EmployeeDetails/EmployeeDetails";

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
  ];

  return (
    <main className="main">
      <Header />
      <EmployeeForm />
      <EmployeeDetails employeeDetails={employeeDetails} />
    </main>
  );
}

export default App;
