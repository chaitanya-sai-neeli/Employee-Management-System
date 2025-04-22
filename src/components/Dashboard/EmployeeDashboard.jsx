import React from "react";
import Header from "../Others/Header";
import TaskTypeAndNumber from "../Others/TaskTypeAndNumber";
import TasksListCards from "../TaskList/TasksListCards";

const EmployeeDashboard = () => {
  return (
    <div className="p-10 bg-[#1c1c1c] h-screen">
      <Header />
      <TaskTypeAndNumber />
      <TasksListCards />
    </div>
  );
};

export default EmployeeDashboard;
