import React from "react";

function Button(props) {
  const { btnId } = props;
  let dataArray = [];
  //  Check Element if exsit , if not :add it to local storage
  const AddElement = (id, oldData) => {
    let allData = oldData.filter((ele) => ele.id !== id);
    allData.push({ id: id });
    localStorage.setItem("data", JSON.stringify(allData));
  };
  // add id to local storage
  const addToSorage = (btnId) => {
    let oldData = JSON.parse(localStorage.getItem("data"));
    if (oldData !== null) {
      AddElement(btnId, oldData);
    } else {
      dataArray.push({ id: btnId });
      localStorage.setItem("data", JSON.stringify(dataArray));
    }
  };
  return <button onClick={() => addToSorage(btnId)}>Add to My story </button>;
}

export default Button;
