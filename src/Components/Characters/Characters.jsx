import React, { useEffect, useReducer } from "react";
import fetchData from "../../utils/fetch";
import Nav from "../Nav";
import Card from "../Common/Card";
import "../../css/character.css";
const initialState = {
  data: [],
  loading: false,
  error: "",
};
function reducer(state, action) {
  switch (action.type) {
    case "fetching":
      return { loading: false, error: "", data: action.payload };
    case "loading":
      return { loading: true, error: "", data: [] };
    case "error":
      return { loading: false, error: action.payload, data: [] };
    default:
      throw new Error();
  }
}
function Characters() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({ type: "loading" });
    fetchData()
      .then((res) => {
        dispatch({ type: "fetching", payload: res });
      })
      .catch((error) => {
        dispatch({ type: "error", payload: error });
      });
    return () => [];
  }, []);
  return (
    <div>
      <Nav />
      <div className="cards">
  
        {state.loading ?  <div className="loader"> </div>   :
        state.data.length> 0 ? (
          state.data.map((ele) => {
            return <Card data={ele} key={ele.id} />;
          })
        ) : (
        <h2> No Data to show </h2>
        )}
      </div>
    </div>
  );
}

export default Characters;
