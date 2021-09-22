import React, { useEffect, useState } from "react";
import fetchData from "../../utils/fetch";
import Nav from "../Nav";
import Card from "../Common/Card";
import "../../css/character.css";
function Characters() {
  const [data, setdata] = useState([]);
  const [isData, setIsData] = useState(false);
  useEffect(() => {
    setIsData(true);
    fetchData().then((res) => setdata(res));
    return () => {
      setIsData(false);
    };
  }, [isData, data]);
  return (
    <div>
      <Nav />
      <div className="cards">
        {data.length > 0 ? (
          data.map((ele) => {
            return <Card data={ele} key={ele.id} />;
          })
        ) : (
          <div className="loading"> </div>
        )}
      </div>
    </div>
  );
}

export default Characters;
