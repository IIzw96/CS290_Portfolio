import './App.css';
import HomePage from './pages/HomePage';
import CreateExercise from './pages/CreateExercise'
import EditExercise from './pages/EditExercise'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';

function App() {
  const [exerciseToEdit, setExerciseToEdit] = useState();
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <header className="App-header">
            <Route path="/" exact>
              <HomePage setExerciseToEdit={setExerciseToEdit}/>
            </Route>
            <Route path="/add-exercise">
              <CreateExercise />
            </Route>
            <Route path="/edit-exercise">
              <EditExercise exerciseToEdit={exerciseToEdit}/>
            </Route>
          </header>
        </Router>
      </header>
    </div>
  );
}

export default App;
