import React, { useEffect, useState } from "react";
import fetchData from "../../utils/fetch";
import Nav from "../Nav";
import StoryCards from "./StoryCards";
import StorySection from "./StorySection";
import "../../css/story.css";
function Story() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    let mount = true;
    if (mount) {
      fetchData().then((res) => {
        setdata(res);
      });
    }
    return () => (mount = false);
  }, []);
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
