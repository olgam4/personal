import React from 'react'
import Link from './components/Link'

import cat from './images/cat.png'

import './App.css'

function App() {
  return (
    <div className="App">
        <div className="App-content">
            <h1>
                Olivier Gamache
            </h1>
            <ul>
                <li><Link name="github" url="https://github.com/olgam4" /></li>
                <li><Link name="linkedin" url="https://linkedin.com/in/olivier-gamache-1337420" /></li>
                <li><Link name="medium" url="https://oliviergamache.medium.com" /></li>
            </ul>
            <div className="App-catchphrase">
                graphic design is my passion
            </div>
        </div>
        <div>
            <img src={cat} alt="awesome cat" width="200px" />
        </div>
    </div>
  )
}

export default App
