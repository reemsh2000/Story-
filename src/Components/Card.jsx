import React from 'react'
import StoreButton from './StoreButton'
import AbilitiesButton from './AbilitiesButton'
function Card(props) {
const {data}=props
const {img_url,name,gender,id,abilities}=data
// console.log(abilities)
    return (
        <div className='card'>
          <img src={img_url} alt='character'/>
          <h5 className='char-name'>Name : {name} </h5>
          <span> Gender : {gender}</span>
          <AbilitiesButton abilities={abilities} id={id}/>
       
          <StoreButton btnId={id}/>
        </div>
    )
}

export default Card
