import React from 'react';
import './App.css';
import StudentSearch from './components/StudentSearch';
import GradeEntry from './components/GradeEntry';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sistema de Gestión de Notas</h1>
      </header>
      <main>
        <StudentSearch />
        <GradeEntry />
      </main>
    </div>
  );
}

export default App;
