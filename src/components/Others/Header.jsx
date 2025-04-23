import React from "react";

const Header = () => {
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />
        <span className="text-3xl font-semibold">Chaitanya👋</span>
      </h1>
      <button className="text-lg font-medium px-5 py-2 text-white bg-red-600 rounded-sm">
        Log Out
      </button>
    </div>
  );
};

export default Header;
