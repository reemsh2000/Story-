import React from "react";

function TextArea() {
  let dataArray = [];
  // add id to local storage
  let oldData = JSON.parse(localStorage.getItem("Story"));
  const handleStory = (e) => {
    if (oldData !== null) {
      let allData = [...oldData];
      allData[0].text = e.target.value;
      localStorage.setItem("Story", JSON.stringify(allData));
    } else {
      dataArray.push({ text: e.target.value });
      localStorage.setItem("Story", JSON.stringify(dataArray));
    }
  };
  return (
    <textarea
      onChange={(e) => handleStory(e)}
      defaultValue={oldData[0].text}
      placeholder="Write your story here"
    />
  );
}

export default TextArea;
