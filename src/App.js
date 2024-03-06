import React from 'react';
import './App.css';
import basketballTeams from './CollegeBasketballTeams.json';

function Team() {
  return (
    <div>
      <div class="grid-container">
        {basketballTeams.teams.map((team) => (
          <div key={team.tid} class="card">
            <p>{team.school}</p>
            <p>{team.name}</p>
            <p>{team.city}, {team.state}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div>
      <h1>College Basketball Teams</h1>
      <p>A collection of all Division 1 College Basketball Teams</p>
    </div>
  );

}

function SingleTeam() {
  var team = basketballTeams.teams[0];
  return (
    <div className="grid-container">
      <div key={team.tid} className="card" style={{ gridColumnStart: 2 }}>
        <p>{team.school}</p>
        <p>{team.name}</p>
        <p>{team.city}, {team.state}</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Heading />
      <SingleTeam />
      <Team />
    </div>
  );
}

export default App;
