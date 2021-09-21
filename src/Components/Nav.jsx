import React from 'react'
import { Link } from 'react-router-dom'
import '../css/nav.css';
function Nav() {
  return (

      <div className='nav-conatiner'>
        <h2 className='title'> Story Maker </h2>
        <ul className='nav'>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/characters">Characters</Link>
          </li>
          <li>
            <Link to="/story">Story</Link>
          </li>
        </ul>
      </div>
 
  )
}

export default Nav
