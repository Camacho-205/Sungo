import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <header className="stack">

        <div id="titleBox">
          <h1 id="TitleText">Fuck You</h1>
        </div>
        <div>
          <button id="UserButton">

          </button>
        </div>

      </header>

      <div id="GameModesBox">

        <button className="GameModesButtons">
          <h1>Quick Play</h1>
        </button>
        <button className="GameModesButtons">
          <h1>Esports Games</h1>
        </button>
        <button className="GameModesButtons">
          <h1>Indie Games</h1>
        </button>
        <button className="GameModesButtons">
          <h1>Computer Games</h1>
        </button>
        <button className="GameModesButtons">
          <h1>Console Games</h1>
        </button>

      </div>

    </div>
  )
}

export default App
