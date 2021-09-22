import React, { useEffect, useState } from "react";
import fetchData from "../../utils/fetch";
import Nav from "../Nav";
import StoryCards from "./StoryCards";
import StorySection from "./StorySection";
import "../../css/story.css";
function Story() {
  const [data, setdata] = useState([]);
  const [isData, setIsData] = useState(false);
  useEffect(() => {
    setIsData(true);
    fetchData().then((res) => setdata(res));
    console.log();
    return () => {
      setIsData(false);
    };
  }, [isData,data]);
  return (
    <div>
      <Nav />
      <main className="story-container">
        <StoryCards data={data} />
        <StorySection />
      </main>
    </div>
  );
}

export default Story;
