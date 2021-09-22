import React from "react";
import Card from "../Common/Card";
function StoryCards(props) {
  const { data } = props;
  let characters = JSON.parse(localStorage.getItem("data"));
  return (
    <div className="story-cards">
      {data ? (
        data.map((ele) => {
          return characters.map((character) => {
            return ele.id === character.id ? (
              <Card data={ele} key={ele.id} storyPage={true} />
            ) : (
              ""
            );
          });
        })
      ) : (
        <div className="loading"> </div>
      )}
    </div>
  );
}

export default StoryCards;
