import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(`Email is ${email}`);
    console.log(`Password is ${password}`);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <form
          className="flex flex-col items-center justify-center"
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="text-xl font-semibold outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 rounded-full placeholder:text-gray-400"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Enter your password"
            required
            className="text-xl font-semibold outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 rounded-full mt-3 placeholder:text-gray-400"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className="text-white border-none text-lg font-semibold outline-none bg-emerald-600 hover:bg-emerald-700 py-2 px-8 w-full rounded-full mt-7">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
