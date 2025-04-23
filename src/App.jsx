import React, { useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";

const App = () => {
  const [user, setUser] = useState(null);
  const handleLogin = (email, password) => {
    if (email === "admin@tcs.com" && password === "123") {
      setUser("Admin");
    } else if (email === "user@tcs.com" && password === "123") {
      setUser("Employee");
    } else {
      alert("Invalid creds");
    }
  };
  // handleLogin("admin@tcs.com", "123");
  // useEffect(() => {
  //   // setLocalStorage();
  //   getLocalStorage();
  // }, []);

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "Admin" ? <AdminDashboard /> : <EmployeeDashboard />}
      {/* <AdminDashboard /> */}
    </>
  );
};

export default App;
