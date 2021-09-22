import React from "react";
import TextArea from "./TextArea";
function StorySection() {
  let name ;
  const userObj = JSON.parse(localStorage.getItem("Name"));
  if(userObj){
    name=userObj.name
  }


  return (
    <div className="story-section">
      <h1> Hello {name} </h1>
      <p> You can write your story here</p>
      <div className='text-story'>
       <TextArea/>
      </div>
    </div>
  );
}

export default StorySection;
