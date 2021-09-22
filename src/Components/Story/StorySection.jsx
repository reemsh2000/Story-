import React from "react";

function StorySection() {
  const userObj = JSON.parse(localStorage.getItem("Name"));
  const { name } = userObj;
  return (
    <div className="story-section">
      <h1> Hello {name} </h1>
    </div>
  );
}

export default StorySection;
