import React from "react";

function NameInput() {
  const handleInput = (e) => {
    localStorage.setItem("Name", JSON.stringify({ name: e.target.value }));
  };
  return (
    <input
      type="text"
      placeholder="Enter your Name Please ^_^"
      onChange={(e) => handleInput(e)}
    />
  );
}

export default NameInput;
