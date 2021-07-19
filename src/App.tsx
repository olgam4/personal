import React from 'react'
import './App.css'

import Link from './components/Link'

function App() {
  return (
    <div className="App">
        <div>
            <h1>
                Olivier Gamache
            </h1>
            <ul>
                <li><Link name="github" url="https://github.com/olgam4" /></li>
                <li><Link name="linkedin" url="https://linkedin.com/in/olivier-gamache-1337420" /></li>
                <li><Link name="medium" url="https://oliviergamache.medium.com" /></li>
            </ul>
        </div>
        <div className="App-catchphrase">
            graphic design is my passion
        </div>
    </div>
  )
}

export default App
