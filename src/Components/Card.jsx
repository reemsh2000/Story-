import React from 'react'
import Button from './Button'
function Card(props) {
const {data}=props
const {img_url,name,gender,id,abilities}=data
// console.log(data)
    return (
        <div className='card'>
          <img src={img_url} alt='character'/>
          <h5>Name : {name} </h5>
          <span> Gender : {gender}</span>
          <Button btnId={id}/>
        </div>
    )
}

export default Card
