import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './Home'
import Characters from'./Characters';
import Story from './Story'
import Welcome from './Welcome';
function Nav() {
  return (
    <Router>
      <div>
        <ul>
        <li>
            <Link to="/">Welcome </Link>
          </li>
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

        <Switch>
        <Route exact path="/">
            <Welcome/>
          </Route>
          <Route exact path="/home">
            <Home/>
          </Route>
          <Route exact path="/characters">
           <Characters/>
          </Route>
          <Route exact path="/story">
            <Story/>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default Nav
