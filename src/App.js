import React from 'react'
import { withRouter } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'

const NavBar = withRouter(({ history }) => {
  const handleClick = (app) => () => {
    if (app === 0) history.push({ pathname: '/' })
    if (app === 1) history.push({ pathname: '/app1' })
    if (app === 2) history.push({ pathname: '/app2' })
  }

  return (
    <div>
      <button onClick={handleClick(0)}> away </button>
      <button onClick={handleClick(1)}> one </button>
      <button onClick={handleClick(2)}> two </button>
    </div>
  )
})

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        App0
      </div>
    </Router>
  )
}

export default App