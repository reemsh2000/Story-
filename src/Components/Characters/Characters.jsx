import React, { useEffect, useState } from "react";
import fetchData from "../../utils/fetch";
import Nav from "../Nav";
import Card from "../Common/Card";
import "../../css/character.css";
function Characters() {
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
