import React from "react";
import DefaultCharacter from "./DefaultCharacter";
import Card from "../Common/Card";
function StoryCards(props) {
  const { data } = props;
  let characters = JSON.parse(localStorage.getItem("data"));
  return (
    <div className="left-section">
      <h3 className="heros-title">Heroes of your story</h3>
      <div className="story-cards">
        {characters ? (
          data.length > 0 ? (
            data.map((ele) => {
              return characters.map((character) => {
                return ele.id === character.id ? (
                  <Card data={ele} key={ele.id} storyPage={true} />
                ) : (
                  ""
                );
              });
            })
          ) :  (<DefaultCharacter/>)
        ) : (
           <DefaultCharacter/>
        )}
      </div>
    </div>
  );
}

export default StoryCards;
