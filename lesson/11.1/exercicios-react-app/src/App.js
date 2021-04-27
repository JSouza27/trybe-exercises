import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import task from './Component.js';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

// feito com a ajuda do gabarito
const tasks = ['Waking up', 'Drinking coffee', 'Brushing teeth', 'Going to work']

function App() {
  return (
    <ul>
      { tasks.map((job) => Task(job)) }
    </ul>
  );
}

export default App;
