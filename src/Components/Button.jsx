import React,{useState} from "react";

function Button(props) {
  const { btnId } = props;
  let dataArray= [];
  const [IsUniqe, setIsUniqe] = useState(false)
  const checkElement = (id, oldData) => {
    oldData.forEach((ele) => {
      if (ele.id === id) {
         setIsUniqe(false);
      }
     else  setIsUniqe(true);
    });
  };

  const addToSorage = (btnId) => {
    let oldData = JSON.parse(localStorage.getItem("data"));
    if (oldData !== null) {
      checkElement(btnId, oldData)
      console.log(oldData);
      console.log('IsUniqe',IsUniqe)
      if (IsUniqe){
        oldData.push({id:btnId});
        localStorage.setItem("data", JSON.stringify(oldData));
      }
    } else {
      dataArray.push({id:btnId});
      localStorage.setItem("data", JSON.stringify(dataArray));
    }
  };
  return <button onClick={() => addToSorage(btnId)}>Add to My story </button>;
}

export default Button;
