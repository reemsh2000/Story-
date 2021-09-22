import React from "react";

function RemoveBtn(props) {
  const { btnId } = props;
  //  Check Element if exsit , if not :add it to local storage
  const RemoveItem = (id, oldData) => {
    let allData = oldData.filter((ele) => ele.id !== id);
    localStorage.setItem("data", JSON.stringify(allData));
  };
  // Remove id from local storage
  const RemoveFromMySorage = (btnId) => {
    let oldData = JSON.parse(localStorage.getItem("data"));
    if (oldData !== null) {
      RemoveItem(btnId, oldData);
    }
  };
  return (
    <button
      onClick={() => RemoveFromMySorage(btnId)}
      className="add-to-store remove"
    >
      Remove
    </button>
  );
}

export default RemoveBtn;
