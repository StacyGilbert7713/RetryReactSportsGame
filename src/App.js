import React from 'react';
import './App.css';
import Game from './Components/Game/Game.js';
import homeTeamMascot from './Assets/images/Hazelwood Husky.jpg';
import visitingTeamMascot from './Assets/images/Parker Penguin.jpg';

function App() {
  const huskyTeam = {
    name: 'Hazelwood Huskies',
    logoSrc: homeTeamMascot
  }

  const penguinTeam = {
    name: 'Parker Penguins',
    logoSrc: visitingTeamMascot
  }

  return (
    <div className="App">
      <Game
        venue="Hazelwood Gym"
        homeTeam={huskyTeam}
        visitingTeam={penguinTeam}
      />
    </div>
  );
}

export default App;
