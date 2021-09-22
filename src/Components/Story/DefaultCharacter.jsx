import React from "react";
import { Link } from "react-router-dom";
function DefaultCharacter() {
  return (
    <div className="ann-div">
      <p> You didn't choose any character</p>
      <img
        src="https://i.pinimg.com/originals/31/f6/72/31f672558dd866e3ca150a103a6b4a43.jpg"
        alt="alt-img"
      />
      <Link to="/characters" className='back'>Back to choose characters</Link>
    </div>
  );
}

export default DefaultCharacter;
