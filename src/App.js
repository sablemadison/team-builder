import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data';
import Team from './Team';
import Form from './Form';

function App() {

  const [teamMembers, setTeamMembers] = useState(data);
  return (
    <div className="App">
    <h1>The Team</h1>
      <Team teamData={teamMembers}/>
      <Form formData ={Form} />
    </div>
  );
}

export default App;
