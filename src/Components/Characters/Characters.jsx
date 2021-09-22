import React ,{useEffect, useState} from 'react'
import fetchData from '../../utils/fetch'
import Nav from "../Nav";
import Card from "../Card";
import '../../css/character.css';
function Characters() {
  const [data, setdata] = useState([])
  useEffect(() => {
      fetchData()
      .then(res=>setdata(res))
      return () => {

      }
  }, [])
  return (
    <div>
      <Nav/>
      <div className='cards'>

        {
          data? data.map((ele)=>{
          return  <Card data={ele}  key={ele.id}/>
          }) :''
        }
      
      </div>
    </div>
  );
}

export default Characters;
