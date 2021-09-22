import React from "react";

function AbilitiesButton(props) {
  const { abilities ,id } = props;
  let btnId;
  const handleSuperClick = (clickedId) => {
    document.querySelector(`#btn${clickedId}`).style.display='inline';
    console.log(`#btn${clickedId}`)
  };
  const handleClose=(clickedId)=>{
    document.querySelector(`#btn${clickedId}`).style.display='none';
  }
  return (
    <div className="abilites-parent">
    {btnId = `btn${id}`}
      <ol className="powerful" id ={btnId}>
        <span className="close"onClick={()=>handleClose(id)}> X</span>
        {abilities.length > 0
          ? abilities.map((ele) => {
              return <li key={ele}> {ele} </li>;
            })
          : <p className='no-abilities'> There  are no abilities for this character, you can add one 😉</p>}
      </ol>
      <button className="abilities" onClick={()=>handleSuperClick(id)}>
        Super Powers
      </button>
    </div>
  );
}

export default AbilitiesButton;
