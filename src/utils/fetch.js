const fetchData = () => {
  return fetch("https://finalspaceapi.com/api/v0/character")
    .then((res) => res.json())
    .catch(console.error);
};
export default fetchData;
