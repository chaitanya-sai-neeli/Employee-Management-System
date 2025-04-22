import React from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import TaskTypeAndNumber from "./components/Others/TaskTypeAndNumber";

const App = () => {
  return (
    <>
      {/* <Login /> */}
      <EmployeeDashboard />
      <TaskTypeAndNumber />
    </>
  );
};

export default App;
