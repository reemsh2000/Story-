import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import '../css/welcome.css';
function Home() {
  const handleInput=(e)=>{
    localStorage.setItem('Name', JSON.stringify({name:e.target.value}))
  }
  return (
    <Fragment>
      <Nav/>
  <div className='welcome-conatiner'>
      <div className='main'>
         <div className='left'>
         <h1> FOREST STORIES </h1>
          <p> When grace is lost from life,come with a burst of song.</p>
          <input type='text' placeholder='Enter your Name Please ^_^' onChange={(e)=>handleInput(e)}/>
          <Link to="/characters">Lets Start</Link>
         </div> 
        <img className='main-img'src='https://media.discordapp.net/attachments/857145728917045328/889969275069149264/2_1-01.png?width=618&height=458'alt='img'/>

      </div>
      <footer>
        <img className='part' src='https://i.pinimg.com/564x/00/c1/db/00c1db5f9ce2e41bf9ee8e4974152fdb.jpg'alt='img'/>
        <div className='description'>
      <h4>   COMPANION </h4>
     <p> In a small garden, with an old tree, children like to play under this tree...</p>
     </div>
</footer>
</div>
</Fragment>
  )
}

export default Home