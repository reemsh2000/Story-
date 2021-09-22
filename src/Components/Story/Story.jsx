import React, { useEffect, useState } from "react";
import fetchData from "../../utils/fetch";
import Nav from "../Nav";
import Card from "../Common/Card";
import "../../css/character.css";
function Story() {
  const [data, setdata] = useState([]);
  let characters = JSON.parse(localStorage.getItem("data"));

  useEffect(() => {
    fetchData().then((res) => setdata(res));
    console.log();
    return () => {};
  }, [characters]);
  return (
    <div>
      <Nav />
      <div className="cards">
        {data ? (
          data.map((ele) => {
            return characters.map((character) => {
              return ele.id === character.id ? (
                <Card data={ele} key={ele.id} storyPage={true}/>
              ) : (
                ""
              );
            });
          })
        ) : (
          <div className="loading"> </div>
        )}
      </div>
    </div>
  );
}

export default Story;
