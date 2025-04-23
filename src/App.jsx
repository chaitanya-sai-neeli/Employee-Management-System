import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const AuthData = useContext(AuthContext);
  console.log(AuthData);

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
  const data = useContext(AuthContext);
  console.log(data);
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "Admin" ? <AdminDashboard /> : <EmployeeDashboard />}
      {/* <AdminDashboard /> */}
    </>
  );
};

export default App;
