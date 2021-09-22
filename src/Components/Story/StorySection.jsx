import React from "react";
import TextArea from "./TextArea";
import Audio from "./Audio";
function StorySection() {
  let name ;
  const userObj = JSON.parse(localStorage.getItem("Name"));
  if(userObj){
    name=userObj.name
  }


  return (
    <div className="story-section">
      <h1 className='welcome'> Hello {name} </h1>
      <Audio/>
      <div className='text-story'>
       <TextArea/>
      </div>
    </div>
  );
}

export default StorySection;
